import React from 'react';

const LastReading = (props) => {
    return (
        <div key={props.sensorData.id}>
            <h2>{props.sensorName}</h2>
            <h4><strong>{props.sensorData.value}</strong>{props.sensorData.uom}</h4>
            <h5><strong>At:</strong>{props.sensorData.timestamp}</h5>
        </div>
    );
}

export default LastReading;