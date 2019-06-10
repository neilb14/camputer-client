import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import moment from 'moment-timezone';
import LastReading from './components/LastReading';
import RangeReading from './components/RangeReading';
import RangeChart from './components/RangeChart';
import TemperatureReading from './components/TemperatureReading';

import './css/bootstrap.min.css';
import './css/index.css';

class App extends Component {
    constructor() {
    super();
    this.timeoutInMs = 1*60*1000;
    this.state = {
        time: moment().tz('America/Edmonton').format(' h:mma MMMM DD, YYYY'),
        temperature: {},
        darksky: {},
        outside: {},
        humidity: {},
        core: {},
        range_inside: [],
        range_outside: [],
        hours: 3,
    }
  }

  getLastTemperature() {
    axios.get(`${process.env.REACT_APP_CAMPUTER_SERVICE_URL}/sensorreadings/last?name=temperature`)
    .then((res) => { this.setState({temperature:res.data}); })
    .catch((err) => { console.log(err); })
  }

  getLastOutside() {
    axios.get(`${process.env.REACT_APP_CAMPUTER_SERVICE_URL}/sensorreadings/last?name=outside`)
    .then((res) => { this.setState({outside:res.data}); })
    .catch((err) => { console.log(err); })
  }

  getLastDarksky() {
    axios.get(`${process.env.REACT_APP_CAMPUTER_SERVICE_URL}/sensorreadings/last?name=darksky`)
    .then((res) => { this.setState({darksky:res.data}); })
    .catch((err) => { console.log(err); })
  }

    getLastCore() {
        axios.get(`${process.env.REACT_APP_CAMPUTER_SERVICE_URL}/sensorreadings/last?name=core`)
            .then((res) => { this.setState({core:res.data}); })
            .catch((err) => { console.log(err); })
    }

  getLastHumidity() {
    axios.get(`${process.env.REACT_APP_CAMPUTER_SERVICE_URL}/sensorreadings/last?name=humidity`)
    .then((res) => { this.setState({humidity:res.data}); })
    .catch((err) => { console.log(err); })
  }

  getTemperatureRange(hours) {
    axios.get(`${process.env.REACT_APP_CAMPUTER_SERVICE_URL}/sensorreadings?name=temperature&hours=${hours}`)
      .then((res) => { this.setState({range_inside:res.data.readings}); })
      .catch((err) => { console.log(err); });
    axios.get(`${process.env.REACT_APP_CAMPUTER_SERVICE_URL}/sensorreadings?name=outside&hours=${hours}`)
      .then((res) => { this.setState({range_outside:res.data.readings}); })
      .catch((err) => { console.log(err); });
  }

  onTimeout() {
    this.setState({time: moment().tz('America/Edmonton').format(' h:mma MMMM DD, YYYY')});
    this.getLastTemperature();
    this.getLastOutside();
    this.getLastDarksky();
    this.getTemperatureRange(this.state.hours);
    this.getLastHumidity();
    this.getLastCore();
    setTimeout(() => { this.onTimeout() }, this.timeoutInMs);
  }

  componentDidMount(){
    this.getLastDarksky();
    this.getLastTemperature();
    this.getLastOutside();
    this.getTemperatureRange(this.state.hours);
    this.getLastHumidity();
    this.getLastCore();
    setTimeout(()=>{ this.onTimeout() }, this.timeoutInMs)
  }

  changeHours(hours) {
    this.setState({ hours });
    this.getTemperatureRange(hours);
  }

  render() {
    return (
        <>
            <div className="top-bar"/>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img className='d-inline align-top' src='./images/002-camping-144x144.png' alt='Camputer' width='60px' height='60px' />
                    { this.state.time }
                </a>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <TemperatureReading  sensorData={this.state.temperature} sensorName="Inside" />
                    </div>
                    <div className="col-md-3">
                        <TemperatureReading sensorData={this.state.outside} sensorName="Outside" />
                    </div>
                    <div className="col-md-3">
                        <TemperatureReading sensorData={this.state.darksky} sensorName="Darksky" />
                    </div>
                    <div className="col-md-3">
                        <TemperatureReading sensorData={this.state.core} sensorName="Core" />
                    </div>
                </div>
                <div className="row chart-controls">
                    <div className="col-md-6">
                        <button className="btn-primary" onClick={() => this.changeHours(3)}>3 Hrs</button>
                        <button className="btn-primary" onClick={() => this.changeHours(12)}>12 Hrs</button>
                        <button className="btn-primary" onClick={() => this.changeHours(24)}>24 Hrs</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <RangeChart insideData={ this.state.range_inside } outsideData={ this.state.range_outside } />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <RangeReading sensorData={this.state.range_outside} range={this.state.hours} sensorName="Outside Temperature" />
                    </div>
                    <div className="col-md-3">
                        <RangeReading sensorData={this.state.range_inside} range={this.state.hours} sensorName="Inside Temperature" />
                    </div>
                    <div className="col-md-3">
                        <LastReading sensorData={this.state.humidity} sensorName="Humidity" />
                    </div>
                </div>
            </div>
        </>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
