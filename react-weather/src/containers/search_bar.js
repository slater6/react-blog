import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = { term : '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({
      term: event.target.value
    });
  }

  onFormSubmit(event){
    event.preventDefault();

    this.props.fetchWeather(this.state.term);

    this.setState({ term : '' });
  }


  render(){
    return (
      <div className="row">
        <div className="col-sm-12">
          <form onSubmit= { this.onFormSubmit }>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for a city..."
                value={ this.state.term }
                onChange= { this.onInputChange }
              />
              <span className="input-group-btn">
                <button className="btn btn-default" type="submit">Go!</button>
              </span>
            </div>
          </form >
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
