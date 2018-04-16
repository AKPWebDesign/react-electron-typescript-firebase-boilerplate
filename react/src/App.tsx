import * as React from 'react';
import { connect } from 'react-redux';
import isElectron from 'is-electron';
import { IState } from './modules';
import Counter from './components/counter';
import ElectronVersion from './components/electron-version';
import './App.css';
import logo from './logo.svg';
import { getFirebase } from 'react-redux-firebase';

interface IAppProps {
  firebase: any,
  auth: any,
};

class AppComponent extends React.Component<IAppProps, any> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event: any) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event: any) {
    this.setState({ password: event.target.value });
  }

  handleSubmit() {
    this.props.firebase.login(this.state);
  }

  render() {
    if (!this.props.auth.isLoaded) {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Loading...</h1>
          </header>
          <p className="App-intro">
            Please wait.
          </p>
        </div>
      );
    }

    if (this.props.auth.isEmpty || !(!!this.props.auth && !!this.props.auth.uid)) {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Log In</h1>
          </header>
          <p className="App-intro">
            Email: <input type="text" name="email" value={this.state.email} onChange={this.handleEmailChange} /> (demo@demo.demo)<br /><br />
            Password: <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} /> (demodemo)<br /><br />
            <button onClick={this.handleSubmit}>Log In</button>
          </p>
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button className="App-logout" onClick={this.props.firebase.logout}>Log Out</button>
        <Counter />
        { isElectron() ? <ElectronVersion /> : null }
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  auth: state.firebase.auth,
  firebase: getFirebase()
});

const App = connect(mapStateToProps, null)(AppComponent);

export default App;
