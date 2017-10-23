import React from 'react';

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
    console.log(props.sensorData.value);
    var formattedDate = formatDate(props.sensorData.timestamp);
    return (
        <div key={ props.sensorData.id }>
            <h2>{ props.sensorName }</h2>
            <h4><strong>{props.sensorData.value}</strong>{ props.sensorData.uom }</h4>
            <span class='timestamp'>{ formattedDate }</span>
        </div>
    );
}

export default LastReading;