import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Wallet extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1 className="balance">Wallet Balance: {this.props.balance}</h1>
      </div>
    );
  }
}

export default connect(state => {
  return { balance: state };
}, {})(Wallet);
