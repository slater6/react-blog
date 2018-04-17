import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deposit } from '../actions/balance';

export class Wallet extends Component {
  constructor() {
    super();

    this.state = { balance: undefined };
  }

  handleChange = event => {
    const value = parseInt(event.target.value, 10);
    this.setState({
      balance: value
    });
  };

  deposit = () => {
    this.props.deposit(this.state.balance);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h1 className="balance">Wallet Balance: {this.props.balance}</h1>
        <br />
        <input
          type="text"
          onChange={this.handleChange}
          className="input-wallet"
        />
        <button className="btn-deposit" onClick={this.deposit}>
          Deposit
        </button>
      </div>
    );
  }
}

export default connect(
  state => {
    return { balance: state };
  },
  { deposit }
)(Wallet);
