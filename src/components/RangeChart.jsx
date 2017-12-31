import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';
import '../css/range-chart.css';

const moment = require('moment-timezone');

const formatTemperature = (value) => {
    return Math.round(value, 2);
}

const formatTimestamp = (value) => {
    return moment(value).tz('America/Edmonton').format('h:mm');
}

const reverse = (data) => {
    let results = [];
    for(var i=data.length - 1; i>= 0; i--){
        results.push(data[i])
    }
    return results;
}

const combine = (insideData, outsideData) => {
    let results = [];
    for(var i=0; i< insideData.length; i++){
        let c = {
            inside: insideData[i].value,
            outside: null,
            timestamp: insideData[i].timestamp
        };
        if(i < outsideData.length) {
            c.outside = outsideData[i].value;
        }
        results.push(c);
    }
    return results;
}

const RangeChart = (props) => {
    let data = combine(reverse(props.insideData), reverse(props.outsideData));
    return (
        <div className="range-chart">
            <LineChart width={400} height={300} data={ data } margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="timestamp" tickFormatter={formatTimestamp} />
                <YAxis label="C" domain={['dataMin - 4', 'dataMax+4']} allowDecimals={false} tickFormatter={formatTemperature}/>
                <Line type="monotone" dataKey="inside" stroke="#ff3300" dot={false}/>
                <Line type="monotone" dataKey="outside" stroke="#0000ff" dot={false}/>
            </LineChart>
        </div>
    );
}

export default RangeChart;