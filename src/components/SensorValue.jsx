import React from 'react';

let formatValue = function(v) {
    if(v===undefined) return '-';
    if(typeof v === 'string') return v;
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

const h4Style = {
    fontSize: '18px',
}

const SensorValue = (props) => {
    var formattedValue = formatValue(props.sensorData.value);
    var formattedUom = formatUom(props.sensorData.uom);
    return (
        <span key={ props.sensorData.id }>
            <h4 className={ props.className }><strong>{ formattedValue }</strong>{ formattedUom }</h4>
        </span>
    );
}

export default SensorValue;