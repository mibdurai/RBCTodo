import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoViewComponent } from './todo-view/todo-view.component';
import { EditTodoOpenerComponent } from './edit-todo-opener/edit-todo-opener.component';

const route: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {
                path: 'view/todoview',
                component: TodoViewComponent
            },
            {
                path: '',
                redirectTo: 'view/todoview',
                pathMatch: 'full'
            },
            {
                // path: 'view/editview',
                path: 'todo/:todoId/edit',
                component: EditTodoOpenerComponent,
                outlet: 'todoEditOutlet'
            }
        ]
    },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: PagenotfoundComponent }
]
@NgModule({
    imports: [RouterModule.forRoot(route)],
    exports: [RouterModule]
})
export class AppRouterModule
{ }