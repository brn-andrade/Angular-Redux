import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { AddTutorial } from 'src/app/actions/tutorial.actions';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Tutorial } from 'src/app/models/tutorial.model';

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

  addTutorial(data: Tutorial) {

    this.form.reset();
    console.log('create');

    this.store.dispatch(new AddTutorial({ name: data.name, url: data.url }));
  }

}
