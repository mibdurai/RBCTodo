import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from '../services/todo.service'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from '../model/todo';
import { RouterService } from '../services/router.service';


@Component({
  selector: 'app-edit-todo-view',
  templateUrl: './edit-todo-view.component.html',
  styleUrls: ['./edit-todo-view.component.css']
})
export class EditTodoViewComponent implements OnInit {

  todo: Todo = new Todo();  
  errMessage: string;

  constructor(private dialogRef: MatDialogRef<EditTodoViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private todoService: TodoService,
    private routerService: RouterService) {
  }

  ngOnInit() {
    this.todo = this.todoService.getTodoById(this.data.todoId);
  }

  onSave() {
    this.todoService.editTodo(this.todo).subscribe(res => {
      this.dialogRef.close();
    },
      err => {
        this.errMessage = err.message;
      });

  }

//On popup close naviage to dashboard page
  ngOnDestroy() {
    this.routerService.routeBack();
  }

}
