import { Jokes, JokesReducer } from './reducers/jokes.reducers';
import { ActionReducerMap } from '@ngrx/store';
import { Counter, CounterReducer } from './reducers/counter.reducer';



export interface StoreInterfaces {
    counter: Counter,
    jokes: Jokes[]
}

export const reducers: ActionReducerMap<StoreInterfaces> = {
    counter: CounterReducer,
    jokes: JokesReducer
}