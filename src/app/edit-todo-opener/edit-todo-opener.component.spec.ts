import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTodoOpenerComponent } from './edit-todo-opener.component';

describe('EditTodoOpenerComponent', () => {
  let component: EditTodoOpenerComponent;
  let fixture: ComponentFixture<EditTodoOpenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTodoOpenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTodoOpenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
