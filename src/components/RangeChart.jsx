import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

const RangeChart = (props) => {
    return (
        <div>
            <LineChart width={400} height={300} data={ props.sensorData } 
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="timestamp" label="Time" />
                <YAxis label="Temperature" domain={['datamin - 2', 'datamax+2']} />
                <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false}/>
            </LineChart>
        </div>
    );
}

export default RangeChart;