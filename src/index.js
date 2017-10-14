import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
        temperature: {},
        humidity: {}
    }
  }
  
  getLastTemperature() {
    axios.get(`${process.env.REACT_APP_CAMPUTER_SERVICE_URL}/temperatures/last`)
    .then((res) => { this.setState({temperature:res.data}); })
    .catch((err) => { console.log(err); })
  }
  
  getLastHumidity() {
    axios.get(`${process.env.REACT_APP_CAMPUTER_SERVICE_URL}/humidities/last`)
    .then((res) => { this.setState({humidity:res.data}); })
    .catch((err) => { console.log(err); })
  }

  componentDidMount(){
      this.getLastTemperature();
      this.getLastHumidity();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <br/>
            <h1>Camputer</h1>
            <hr/><br/>
          </div>
        </div>
        <div className="row">
            <div className="col-md-3">
                <h2>Temperature</h2>
                <h4 key={this.state.temperature.id}><strong>{this.state.temperature.value}</strong>{this.state.temperature.uom}</h4>
            </div>
            <div className="col-md-3">
                <h2>Humidity</h2>
                <h4 key={this.state.humidity.id}><strong>{this.state.humidity.value}</strong>{this.state.humidity.uom}</h4>
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