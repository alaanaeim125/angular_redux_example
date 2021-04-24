import { INCREMENT, DECREMENT } from './../static-variables';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface Counter {
  count: number;
}

const initState = {
  count: 0,
};

export const CounterReducer = (state = initState, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + action.payload.count,
      };

    case DECREMENT:
      return {
        count: state.count - action.payload.count <= 0 ? 0 : state.count - action.payload.count,
      };

    default:
      return state;
  }
};

const counterFS = createFeatureSelector<Counter>('counter')
export const countSelector = createSelector(counterFS, state => state.count);

