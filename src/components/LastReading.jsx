import React from 'react';

let formatDate = function (d) {
    if(d=== undefined) return '';
    var date = new Date(d);
    //return date.getYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
    return date.toDateString() + ' ' + date.toLocaleTimeString();
}

const LastReading = (props) => {
    console.log(props.sensorData.value);
    var formattedDate = formatDate(props.sensorData.timestamp);
    return (
        <div key={ props.sensorData.id }>
            <h2>{ props.sensorName }</h2>
            <h4><strong>{props.sensorData.value}</strong>{ props.sensorData.uom }</h4>
            <h5><strong>At: </strong>{ formattedDate }</h5>
        </div>
    );
}

export default LastReading;