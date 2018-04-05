import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators as Actions, IState } from '../modules';

interface ICounterProps {
  counter: number,
  increment(): void,
  decrement(): void,
  reset(): void,
  add(amount: number): void,
  sub(amount: number): void,
};

class CounterComponent extends React.Component<ICounterProps, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      inputVal: 5
    }

    this.props = props;

    this.handleValueChange = this.handleValueChange.bind(this);
    this.add = this.add.bind(this);
    this.sub = this.sub.bind(this);
  }

  handleValueChange(event: any) {
    this.setState({ inputVal: event.target.value });
  }

  add() {
    this.props.add(this.state.inputVal);
  }

  sub() {
    this.props.sub(this.state.inputVal);
  }

  render() {
    return (
      <div>
        <p>{this.props.counter}</p>
        <p>
          <button onClick={this.props.decrement}>-</button>
          &nbsp;|&nbsp;
          <button onClick={this.props.increment}>+</button>
        </p>
        <p><button onClick={this.props.reset}>Reset</button></p>
        <p>
          <input type="number" value={this.state.inputVal} onChange={this.handleValueChange} />
        </p>
        <p>
          <button onClick={this.add}>Add {this.state.inputVal} to counter</button>&nbsp;
          <button onClick={this.sub}>Subtract {this.state.inputVal} from counter</button>
        </p>
      </div>
    )
  }
}

const mapStateToProps = (state: IState) => ({
  counter: state.example.counter
});

const mapDispatchToProps = (dispatch: any) => (
  bindActionCreators({
    increment: Actions.example.incrementCounter,
    decrement: Actions.example.decrementCounter,
    reset: Actions.example.resetCounter,
    add: Actions.example.addToCounter,
    sub: Actions.example.subtractFromCounter,
  }, dispatch)
);

const Counter = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);

export default Counter;
