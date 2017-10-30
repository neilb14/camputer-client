import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

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

const RangeChart = (props) => {
    let reversedData = reverse(props.sensorData);
    return (
        <div>
            <LineChart width={400} height={300} data={ reversedData } margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="timestamp" tickFormatter={formatTimestamp} />
                <YAxis label="C" domain={['dataMin - 4', 'dataMax+4']} allowDecimals={false} tickFormatter={formatTemperature}/>
                <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false}/>
            </LineChart>
        </div>
    );
}

export default RangeChart;