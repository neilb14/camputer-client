import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
        temperature: {}
    }
  }
  
  getLastTemperature() {
    axios.get(`${process.env.REACT_APP_CAMPUTER_SERVICE_URL}/temperatures/last`)
    .then((res) => { this.setState({temperature:res.data}); })
    .catch((err) => { console.log(err); })
  }

  componentDidMount(){
      this.getLastTemperature();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <br/>
            <h1>Camputer</h1>
            <hr/><br/>
            <h2>Temperature</h2>
            <h4 key={this.state.temperature.id}><strong>{this.state.temperature.value}</strong>{this.state.temperature.uom}</h4>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);