import { createAction } from 'typesafe-actions';

export interface IExampleState {
  readonly counter: number,
};

export enum Actions {
  IncrementCounter = 'INCREMENT_COUNTER',
  DecrementCounter = 'DECREMENT_COUNTER',
  AddToCounter = 'ADD_TO_COUNTER',
  SubtractFromCounter = 'SUBTRACT_FROM_COUNTER',
  ResetCounter = 'RESET_COUNTER'
};

const incrementCounter = createAction(Actions.IncrementCounter);

const decrementCounter = createAction(Actions.DecrementCounter);

const addToCounter = createAction(Actions.AddToCounter, (amount: number) => ({
  type: Actions.AddToCounter,
  payload: amount,
}));

const subtractFromCounter = createAction(Actions.SubtractFromCounter, (amount: number) => ({
  type: Actions.SubtractFromCounter,
  payload: amount,
}));

const resetCounter = createAction(Actions.ResetCounter);

export const ActionCreators = {
  incrementCounter,
  decrementCounter,
  addToCounter,
  subtractFromCounter,
  resetCounter,
};

const initialState: IExampleState = {
  counter: 0,
};

const example = (state: IExampleState = initialState, action: any) => {
  switch(action.type) {
    case Actions.IncrementCounter: {
      const counter = state.counter + 1;
      return { counter };
    }
    case Actions.DecrementCounter: {
      const counter = state.counter - 1;
      return { counter };
    }
    case Actions.AddToCounter: {
      const counter = state.counter + Number(action.payload);
      return { counter };
    }
    case Actions.SubtractFromCounter: {
      const counter = state.counter - Number(action.payload);
      return { counter };
    }
    case Actions.ResetCounter: {
      return { counter: 0 };
    }
    default:
      return state;
  }
}

export default example;
