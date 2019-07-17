import { Component, OnInit,Input } from '@angular/core';
import { Todo } from '../model/todo';
import { RouterService } from './../services/router.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

 @Input() todo: Todo;
  constructor(private routerservice: RouterService) { }

  ngOnInit() {
  }

 OpenEditTodoView() {
    this.routerservice.routeToEditTodoView(this.todo.id);
  }
}
