import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTakerComponent } from './todo-taker.component';

describe('TodoTakerComponent', () => {
  let component: TodoTakerComponent;
  let fixture: ComponentFixture<TodoTakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoTakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
