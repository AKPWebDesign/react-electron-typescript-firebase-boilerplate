import { combineReducers } from 'redux';
import example, {
  Actions as ExampleActions,
  ActionCreators as ExampleActionCreators,
  IExampleState,
} from './example';

const reducers = combineReducers({
  example,
});

export default reducers;

export const Actions = {
  example: ExampleActions
};

export const ActionCreators = {
  example: ExampleActionCreators
}

export interface IState {
  example: IExampleState
};
