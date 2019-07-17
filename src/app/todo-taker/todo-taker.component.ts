import { Component, OnInit } from '@angular/core';
import {Todo} from '../model/todo';
import {TodoService} from '../services/todo.service'


@Component({
  selector: 'app-todo-taker',
  templateUrl: './todo-taker.component.html',
  styleUrls: ['./todo-taker.component.css']
})
export class TodoTakerComponent implements OnInit {

errMessage: string;
  todos: Array<Todo>;
  todo: Todo;
  constructor(public todoservice: TodoService) {
    this.todo = new Todo();
    this.errMessage = '';
   }

  ngOnInit() {
  }

addTodoDetails() {
    if (this.todo.task !=='' ) {

      this.todoservice.addTodo(this.todo).subscribe(
        data => {

        },
        error => {
          this.errMessage = error.message;
         
        }
      );

      this.todo = new Todo();
    } else {
      this.errMessage = 'Title and Text both are required fields';
    }
  }
}
