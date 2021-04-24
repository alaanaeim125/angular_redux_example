import { createFeatureSelector, createSelector } from '@ngrx/store';
import { JOKES } from './../static-variables';

export interface Jokes {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

export const JokesReducer = (state: Jokes[], action) => {
  switch (action.type) {
    case JOKES:
      return action.payload;
    default:
      return state;
  }
};


const createFS = createFeatureSelector<Jokes>('jokes');
export const jokeSelector = createSelector(createFS, state => state);