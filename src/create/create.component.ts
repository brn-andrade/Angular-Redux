import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { AddTodo } from 'src/app/actions/todo.actions';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup;

  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    this.form = fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      url: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit() {
  }

  addTodo(data: Todo) {

    this.form.reset();
    console.log('create');

    this.store.dispatch(new AddTodo({ name: data.name, url: data.url }));
  }

}
