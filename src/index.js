import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import axios from 'axios';
import moment from 'moment-timezone';
import LastReading from './components/LastReading';
import RangeReading from './components/RangeReading';
import RangeChart from './components/RangeChart';

import './css/bootstrap.min.css';
import './css/index.css';

class App extends Component {
    constructor() {
    super()
    this.timeoutInMs = 1*60*1000;
    this.state = {
        time: moment().tz('America/Edmonton').format(' h:mma MMMM DD, YYYY'),
        temperature: {},
        humidity: {},
        range_temperature: []
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

  getTemperatureRange() {
    axios.get(`${process.env.REACT_APP_CAMPUTER_SERVICE_URL}/temperatures?hours=3`)
    .then((res) => { this.setState({range_temperature:res.data.readings}); })
    .catch((err) => { console.log(err); })
  }

  onTimeout() {
    this.setState({time: moment().tz('America/Edmonton').format(' h:mma MMMM DD, YYYY')}); 
    this.getLastTemperature();
    this.getTemperatureRange();
    this.getLastHumidity();
    setTimeout(() => { this.onTimeout() }, this.timeoutInMs);
  }

  componentDidMount(){
    this.getLastTemperature();
    this.getTemperatureRange();
    this.getLastHumidity();
    setTimeout(()=>{ this.onTimeout() }, this.timeoutInMs)
  }

  render() {
    return (
      <div className="container">
        <PageHeader><img className='logo' src='./images/002-camping-144x144.png' alt='Logo' height='60px'/><small>{ this.state.time }</small></PageHeader>
        <div className="row">
            <div className="col-md-3">
                <LastReading sensorData={this.state.temperature} sensorName="Temperature" />
            </div>
            <div className="col-md-3">
                <LastReading sensorData={this.state.humidity} sensorName="Humidity" />
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <RangeChart sensorData={this.state.range_temperature} />
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <RangeReading sensorData={this.state.range_temperature} sensorName="3hrs Temperature" />
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