import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTodoViewComponent } from './edit-todo-view.component';

describe('EditTodoViewComponent', () => {
  let component: EditTodoViewComponent;
  let fixture: ComponentFixture<EditTodoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTodoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTodoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
