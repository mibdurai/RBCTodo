import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRouterModule } from './app.routes.component';
import { TodoTakerComponent } from './todo-taker/todo-taker.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoViewComponent } from './todo-view/todo-view.component'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditTodoOpenerComponent } from './edit-todo-opener/edit-todo-opener.component';
import { EditTodoViewComponent } from './edit-todo-view/edit-todo-view.component';


@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    HeaderComponent,
    TodoTakerComponent,
    DashboardComponent,
    TodoViewComponent,
    EditTodoOpenerComponent,
    EditTodoViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    EditTodoViewComponent
  ]
})
export class AppModule { }
