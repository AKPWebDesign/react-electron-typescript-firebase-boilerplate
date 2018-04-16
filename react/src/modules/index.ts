import { combineReducers } from 'redux';
import {
  firebaseReducer as firebase,
  actionTypes as FirebaseActions,
} from 'react-redux-firebase';
import example, {
  Actions as ExampleActions,
  ActionCreators as ExampleActionCreators,
  IExampleState,
} from './example';
import electron, {
  Actions as ElectronActions,
  ActionCreators as ElectronActionCreators,
  IElectronState,
} from './electron';

const reducers = combineReducers({
  example,
  electron,
  firebase,
});

export default reducers;

export const Actions = {
  example: ExampleActions,
  electron: ElectronActions,
  firebase: FirebaseActions,
};

export const ActionCreators = {
  example: ExampleActionCreators,
  electron: ElectronActionCreators,
}

export interface IState {
  example: IExampleState,
  electron: IElectronState,
  firebase: any,
};
