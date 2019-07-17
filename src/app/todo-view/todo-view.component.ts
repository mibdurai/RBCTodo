import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../model/todo';
import { RouterService } from './../services/router.service';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit {

  todos: Array<Todo>;
  constructor(public todoService: TodoService, private routerservice: RouterService) {
    this.todos = new Array<Todo>();
  }

  ngOnInit() {
    // get the todo list from the server
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });
  }


  OpenEditTodoView(todo: Todo) {
    this.routerservice.routeToEditTodoView(todo.id);
  }


  DeleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo).subscribe(data => { },
      error => {
        console.log(error)
      }
    );
  }

  MarkComplete(todo: Todo) {
    todo.completed = true;
    this.todoService.editTodo(todo).subscribe(res => {
    },
      err => {
        console.log(err)
      });

  }
  checkDatePassed(todo: Todo) {
    var myDate = new Date(todo.duedate);
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    if (myDate > today) {
      return false;
    }
    return true;
  }
}
