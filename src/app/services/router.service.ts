import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(public router: Router, private location: Location) {
  }
  routeToDashboard() {
    this.router.navigate(['dashboard']);
  }

    routeToEditTodoView(todoId) {
    this.router.navigate(['dashboard',
      {
        outlets: {
          todoEditOutlet: ['todo', todoId, 'edit']
        }
      }]);
  }

  routeBack() {
    this.location.back();
  }

  routeToTodoView() {
    this.router.navigate(['dashboard/view/todoview']);
  }

  

}
