import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoViewComponent } from '../edit-todo-view/edit-todo-view.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RouterService } from '../services/router.service';



@Component({
  selector: 'app-edit-todo-opener',
  templateUrl: './edit-todo-opener.component.html',
  styleUrls: ['./edit-todo-opener.component.css']
})
export class EditTodoOpenerComponent implements OnDestroy  {

  todoId: number;

  constructor(private matDialog: MatDialog, private activatedRouter: ActivatedRoute, private routerService: RouterService) {
    this.activatedRouter.params.subscribe(params => this.todoId = params.todoId);
    this.matDialog.open(EditTodoViewComponent, {
      data: { todoId: this.todoId }
    }).afterClosed().subscribe(result => {

      this.routerService.routeToDashboard();
    });
  }

  ngOnDestroy() {
    this.routerService.routeToDashboard();
  }

}
