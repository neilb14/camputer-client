import React from 'react';
import SensorValue from '../components/SensorValue'

let formatDate = function (d) {
    if(d=== undefined) return '';
    var date = new Date(d);
    var month = date.getMonth() + 1;
    var day = date.getDate();
    if(month < 10) {
        month = '0' + month;
    }
    if(day < 10) {
        day = '0' + day;
    }
    var dayMonthYear = date.getFullYear() + '-' + month + '-' + day;
    return dayMonthYear + ' ' + date.toLocaleTimeString();
}

const LastReading = (props) => {
    var formattedDate = formatDate(props.sensorData.timestamp);
    return (
        <div key={ props.sensorData.id }>
            <h2>{ props.sensorName }</h2>
            <SensorValue sensorData={ props.sensorData } />
            <span className='timestamp'>{ formattedDate }</span>
        </div>
    );
}

export default LastReading;