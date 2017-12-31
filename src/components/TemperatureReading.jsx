import React from 'react';
import LastReading from '../components/LastReading';
import '../css/temperature-reading.css';

const TemperatureReading = (props) => {
    return (
        <div className="temperature-reading-container">
            <div className="temperature-reading-left" id="temperature-reading-image">
                <img src='./images/thermometer.png'/>
            </div>            
            <div id="temperature-reading-reading">
                <LastReading sensorName={ props.sensorName } sensorData={ props.sensorData } />
            </div>
        </div>
    );
}

export default TemperatureReading;
