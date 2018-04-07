import { combineReducers } from 'redux';
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
});

export default reducers;

export const Actions = {
  example: ExampleActions,
  electron: ElectronActions,
};

export const ActionCreators = {
  example: ExampleActionCreators,
  electron: ElectronActionCreators,
}

export interface IState {
  example: IExampleState,
  electron: IElectronState,
};
