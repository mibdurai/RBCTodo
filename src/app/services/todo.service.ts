import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Array<Todo>;
  todosSubject: BehaviorSubject<Array<Todo>>;

  constructor(private http: HttpClient) {
    this.todos = [];
    this.todosSubject = new BehaviorSubject(this.todos);
    this.fetchTodoFromServer();
  }
  //Fetch the todo list on the load
  fetchTodoFromServer() {
    this.http.get<Array<Todo>>(environment.servicebaseurl + '/todos').subscribe(res => {
      this.todos = res;
      this.sortTodo();
      this.todosSubject.next(this.todos);
    });

  }

  //Add New todo 
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(environment.servicebaseurl + '/todos', todo)
      .pipe(
      tap((newtodo: Todo) => {
        this.todos.push(newtodo);
        this.sortTodo();
        this.todosSubject.next(this.todos);//push the new todo to BehaviorSubject
      })
      , catchError(
        this.handleError<Todo>('addTodo', new Todo())
      )
      );
  }

  getTodos(): BehaviorSubject<Array<Todo>> {
    return this.todosSubject;
  }


  editTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(environment.servicebaseurl + '/todos/' + todo.id, todo)
      .pipe(
      tap(() => {
        this.sortTodo()
        this.todosSubject.next(this.todos);
      }),
      catchError(this.handleError('updateTodo', todo))
      );
  }

  deleteTodo(todo: Todo): Observable<{}> {
    return this.http.delete(environment.servicebaseurl + '/todos/' + todo.id)
      .pipe(
      tap(() => {
        this.todos = this.todos.filter(obj => obj.id !== todo.id);       
        this.todosSubject.next(this.todos);
      })
      , catchError(
        this.handleError<Todo>('deleteTodo', new Todo())
      )
      );

  }


  getTodoById(todoId): Todo {
    let tododata = this.todos.find(todo => (todo.id == todoId));
    return tododata;
  }

  //sort the todo by date
  private sortTodo() {
    this.todos.sort((a: Todo, b: Todo) => {
      return this.getTime(a.duedate) - this.getTime(b.duedate);
    });
  }

  private getTime(date?: Date) {
    return date != null ? new Date(date).getTime() : Number.MAX_SAFE_INTEGER;
  }


  //To log the error 
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
