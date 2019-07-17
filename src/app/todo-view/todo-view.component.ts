import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit {

todos:Array<Todo>;
  constructor(public todoService:TodoService) { 
      this.todos = new Array<Todo>();
  }

  ngOnInit() {
    // get the todo list from the server
     this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });
  }

}
