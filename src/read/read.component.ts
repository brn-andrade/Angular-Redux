import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from 'src/app/models/tutorial.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { RemoveTutorial } from 'src/app/actions/tutorial.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  tutorials: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>) {
    this.tutorials = store.select('tutorial');
  }

  ngOnInit() {
  }

  deleteTutorial(index: number) {
    this.store.dispatch(new RemoveTutorial(index));
  }

}
