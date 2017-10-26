import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';
import RangeReading from '../components/RangeReading';

beforeEach(()=>{

});

test('RangeReading component should display the name of the sensor', () => {
    const data = []
    const wrapper = shallow(
        <RangeReading sensorData={data} sensorName='3hr Temperature' />
    );
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.contains(<h2>3hr Temperature</h2>)).toEqual(true);
});

test('RangeReading component should gracefully handle no data points', () => {
    const data = []
    const wrapper = shallow(
        <RangeReading sensorData={data} sensorName='3hr Temperature' />
    );
    expect(wrapper.find('h4')).toHaveLength(2);
    expect(wrapper.find('h4.low').text()).toEqual('-');
    expect(wrapper.find('h4.high').text()).toEqual('-');
});

test('RangeReading component should display the low value of the sensor over the range', () => {
    const data = [
        {id:100, value:28, uom:'c', timestamp: new Date()},
        {id:101, value:26, uom:'c', timestamp: new Date()},
        {id:102, value:30, uom:'c', timestamp: new Date()}
    ]
    const wrapper = shallow(
        <RangeReading sensorData={data} sensorName='3hr Temperature' />
    );
    expect(wrapper.find('h4.low')).toHaveLength(1);
    expect(wrapper.find('h4.low').text()).toEqual('26');
});

test('RangeReading component should display the low value of the sensor over the range', () => {
    const data = [
        {id:100, value:28, uom:'c', timestamp: new Date()},
        {id:101, value:30, uom:'c', timestamp: new Date()},
        {id:102, value:26, uom:'c', timestamp: new Date()}
    ]
    const wrapper = shallow(
        <RangeReading sensorData={data} sensorName='3hr Temperature' />
    );
    expect(wrapper.find('h4.high')).toHaveLength(1);
    expect(wrapper.find('h4.high').text()).toEqual('30');
});