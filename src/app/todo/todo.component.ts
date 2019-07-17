import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../model/todo';
import { RouterService } from './../services/router.service';
import { TodoService } from '../services/todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  constructor(private routerservice: RouterService, public todoService: TodoService) { }

  ngOnInit() {
  }

  OpenEditTodoView() {
    this.routerservice.routeToEditTodoView(this.todo.id);
  }


  DeleteTodo() {
    this.todoService.deleteTodo(this.todo).subscribe(data => { },
      error => {
        console.log(error)
      }
    );
  }

  MarkComplete() {
    this.todo.completed = true;
    this.todoService.editTodo(this.todo).subscribe(res => {
    },
      err => {
        console.log(err)
      });

  }
}
