import React from 'react';
import { PieChart, Pie, Legend, Cell } from 'recharts';

const data01 = [
    {name: 'Humidity', value: 30}, 
    {name: 'Non-Humidity', value: 70}
]

const data02 = [
    {name: 'Darksky', value: 12},
    {name: 'Inside', value: 21},
    {name: 'Empty 1', value: 77}]

 const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']; 

const Guage = (props) => {
  	return (
    	<PieChart width={800} height={400}>
        <Pie data={data01} cx={200} cy={200} outerRadius={60} fill="#8884d8">
        {
          	data01.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
        }
        </Pie>
        <Pie data={data02} cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d" label/>
       </PieChart>
    );
}

export default Guage;