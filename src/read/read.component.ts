import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { RemoveTodo } from 'src/app/actions/todo.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  todos: Observable<Todo[]>;

  constructor(private store: Store<AppState>) {
    this.todos = store.select('todo');
  }

  ngOnInit() {
  }

  deleteTodo(index: number) {
    this.store.dispatch(new RemoveTodo(index));
  }

}
