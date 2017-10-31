import React from 'react';
import SensorValue from '../components/SensorValue'

function findLowValue(data) {
    if(data.length <= 0){
        return {id:0, value:'-'};
    }
    var champion = data[0];
    for(var i=0; i < data.length; i++ ){
        if(parseFloat(data[i].value) < parseFloat(champion.value)){
            champion = data[i];
        }
    }
    return champion;
}

function findHighValue(data) {
    if(data.length <= 0){
        return {id:0, value:'-'};
    }
    var champion = data[0];
    for(var i=0; i < data.length; i++ ){
        if(parseFloat(data[i].value) > parseFloat(champion.value)){
            champion = data[i];
        }
    }
    return champion;
}


const RangeReading = (props) => {
    var lowValue = findLowValue(props.sensorData);
    var highValue= findHighValue(props.sensorData);
    return (
        <div>
            <h2>{ props.sensorName }</h2>
            <span><strong>Low: </strong><SensorValue className="low" sensorData={ lowValue } /></span>
            <span><strong>High: </strong><SensorValue className="high" sensorData={ highValue } /></span>
        </div>
    );
}

export default RangeReading;