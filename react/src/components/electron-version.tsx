import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators as Actions, IState } from '../modules';

interface IElectronProps {
  version: string,
  getVersion: any
};

class ElectronVersionComponent extends React.Component<IElectronProps, any> {
  componentWillMount() {
    this.props.getVersion();
  }

  render() {
    return (
      <div>
        <p>Electron Version: {this.props.version}</p>
      </div>
    )
  }
}

const mapStateToProps = (state: IState) => ({
  version: state.electron.version
});

const mapDispatchToProps = (dispatch: any) => (
  bindActionCreators({
    getVersion: Actions.electron.electronVersionRequest,
  }, dispatch)
);

const ElectronVersion = connect(mapStateToProps, mapDispatchToProps)(ElectronVersionComponent);

export default ElectronVersion;
