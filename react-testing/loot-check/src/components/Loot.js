import React, { Component } from 'react';
import { connect } from 'react-redux';
import is from 'is_js';
import { fetchBitcoin } from '../actions/bitcoin';

export class Loot extends Component {
  componentDidMount() {
    this.props.fetchBitcoin();
  }

  computeBitcoin() {
    const { bitcoin } = this.props;

    if (is.empty(bitcoin)) return '';
    console.log(bitcoin.bpi.USD.rate);
    return this.props.balance / parseInt(bitcoin.bpi.USD.rate, 10);
  }

  render() {
    return <h3>Bitcoin Balance: {this.computeBitcoin()}</h3>;
  }
}

export default connect(
  state => ({
    balance: state.balance,
    bitcoin: state.bitcoin
  }),
  { fetchBitcoin }
)(Loot);
