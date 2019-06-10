import React from 'react';
import moment from 'moment-timezone';
import SensorValue from '../components/SensorValue';


let formatDate = function (d) {
    if(d=== undefined) return '';
    return moment(d).tz('America/Edmonton').format('YYYY-MM-DD h:mm A');
}

const h2Style = {
    'fontSize': '16px',
    'fontWeight': 'bold',
    'margin-top': '4px',
    'margin-bottom': '4px'
}

const timestampStyle = {
    fontSize: '10px',
}

const LastReading = (props) => {
    var formattedDate = formatDate(props.sensorData.timestamp);
    return (
        <div key={ props.sensorData.id }>
            <h2 style={ h2Style }>{ props.sensorName }</h2>
            <SensorValue sensorData={ props.sensorData } />
            <span className='timestamp' style={ timestampStyle }>{ formattedDate }</span>
        </div>
    );
};

export default LastReading;
