import { createAction } from 'typesafe-actions';
import { ThunkActionCreator } from '../utils/store';
const isElectron = require('is-electron');

export interface IElectronState {
  readonly version: string
};

export enum Actions {
  ElectronVersionRequest = 'ELECTRON_VERSION_REQUEST',
  ElectronVersionResponse = 'ELECTRON_VERSION_RESPONSE',
};

const electronVersionRequest: ThunkActionCreator<void> = () => (dispatch) => {
  if (isElectron()) {
    dispatch(createAction(Actions.ElectronVersionRequest));
    const { ipcRenderer } = require('electron');
    const electronVersion = ipcRenderer.sendSync('electron-version');
    dispatch(electronVersionResponse(electronVersion));
  }
};

const electronVersionResponse = createAction(Actions.ElectronVersionResponse, (version: string) => ({
  type: Actions.ElectronVersionResponse,
  payload: version,
}));

export const ActionCreators = {
  electronVersionRequest,
};

const initialState: IElectronState = {
  version: 'undefined'
};

const electron = (state: IElectronState = initialState, action: any) => {
  switch(action.type) {
    case Actions.ElectronVersionRequest: {
      return { ...state, version: 'undefined' };
    }
    case Actions.ElectronVersionResponse: {
      return { ...state, version: action.payload };
    }
    default:
      return state;
  }
}

export default electron;
