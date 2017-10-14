import React from 'react';

const LastReading = (props) => {
    return (
        <div>
            <h2>{props.sensorName}</h2>
            <h4 key={props.sensorData.id}><strong>{props.sensorData.value}</strong>{props.sensorData.uom}</h4>
        </div>
    );
}

export default LastReading;