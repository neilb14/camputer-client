import React from 'react';

function findLowValue(data) {
    if(data.length <= 0){
        return {value:'-'};
    }
    var champion = data[0];
    for(var i=0; i < data.length; i++ ){
        if(parseInt(data[i].value) < parseInt(champion.value)){
            champion = data[i];
        }
    }
    return champion;
}

function findHighValue(data) {
    if(data.length <= 0){
        return {value:'-'};
    }
    var champion = data[0];
    for(var i=0; i < data.length; i++ ){
        if(parseInt(data[i].value) > parseInt(champion.value)){
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
            <h4 className='low'>{ lowValue.value }</h4>
            <h4 className='high'>{ highValue.value }</h4>
        </div>
    );
}

export default RangeReading;