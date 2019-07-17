import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable,of } from 'rxjs';
import {tap, map, catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Array<Todo>;
  todosSubject: BehaviorSubject<Array<Todo>>;

  constructor(public http: HttpClient) {
    this.todos = [];
    this.todosSubject = new BehaviorSubject(this.todos);
    this.fetchTodoFromServer();
  }

  fetchTodoFromServer() {
    this.http.get<Array<Todo>>(environment.servicebaseurl + '/todos').subscribe(res => {
      this.todos = res;
      this.todosSubject.next(this.todos);
    });

  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(environment.servicebaseurl + '/todos', todo)
      .pipe(
      tap((newtodo: Todo) => {
        this.todos.push(newtodo);
        this.todosSubject.next(this.todos);
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
    return this.http.put<Todo>(environment.servicebaseurl +'/todos/'+todo.id, todo)
  }


  getTodoById(todoId): Todo {
    let notedata = this.todos.find(todo =>(todo.id == todoId));
    return notedata;
  }

 handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    
    console.error(error); // log to console instead
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
