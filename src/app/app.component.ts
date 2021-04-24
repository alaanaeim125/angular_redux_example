import { getAllJokes } from './store/actions/jokes.action';
import { jokeSelector, Jokes } from './store/reducers/jokes.reducers';
import { JokesService } from './services/jokes.service';
import { countSelector } from './store/reducers/counter.reducer';
import { decrementCount, incrementCounter } from './store/actions/counter-action';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreInterfaces } from './store/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'redux-example';
  counter = 0;
  jokes: any[];

  constructor(
    private store: Store<StoreInterfaces>,
    private jokeServ: JokesService
  ) {
    this.store.select(countSelector).subscribe(data => this.counter=data);
    this.store.select(jokeSelector).subscribe((jokes: any) => this.jokes = jokes);
    this.store.subscribe(data => console.log(data));
  }

  ngOnInit() {
    this.getAllJokes()
  }


  incrementCount() {
    // this.counter = this.counter + 1
    
    this.store.dispatch(new incrementCounter({count: 5}));
  }
  decrementCount() {
    // this.counter = this.counter - 1
    this.store.dispatch(new decrementCount({count: 5}))
  }

  getAllJokes() {
    this.jokeServ.getAllJokes().subscribe(jokes => {
      this.store.dispatch(new getAllJokes(jokes))
    });
  }
}
