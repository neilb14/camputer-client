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

let formatValue = function(v) {
    if(v===undefined) return '-';
    return Math.round(v*10, -1)/10;
}

let formatUom = function(uom) {
    if(uom===undefined) return '';
    if(uom==='c') {
        return '\u2103';
    }
    if(uom==='f'){
        return '\u2109';
    }
    return uom;
}

const LastReading = (props) => {
    var formattedDate = formatDate(props.sensorData.timestamp);
    var formattedValue = formatValue(props.sensorData.value);
    var formattedUom = formatUom(props.sensorData.uom);
    return (
        <div key={ props.sensorData.id }>
            <h2>{ props.sensorName }</h2>
            <h4><strong>{ formattedValue }</strong>{ formattedUom }</h4>
            <span className='timestamp'>{ formattedDate }</span>
        </div>
    );
}

export default LastReading;