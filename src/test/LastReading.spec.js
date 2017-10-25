import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';
import LastReading from '../components/LastReading';

beforeEach(()=>{

});

test('LastReading component should display the name of the sensor', () => {
    const data = {id:100, value:21, uom:'c', timestamp: new Date()}
    const wrapper = shallow(
        <LastReading sensorData={data} sensorName='Temperature' />
    );
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.contains(<h2>Temperature</h2>)).toEqual(true);
});

test('LastReading component should display the value and unit of the last reading', () => {
    const data = {id:100, value:21, uom:'c', timestamp: new Date()}
    const wrapper = shallow(
        <LastReading sensorData={data} sensorName='Temperature' />
    );
    expect(wrapper.find('h4')).toHaveLength(1);
    expect(wrapper.find('h4').text()).toEqual('21\u2103');
});

test('LastReading component should format the reading value to one decimal place', () => {
    const data = {id:100, value:21.111, uom:'c', timestamp: new Date()}
    const wrapper = shallow(
        <LastReading sensorData={data} sensorName='Temperature' />
    );
    expect(wrapper.find('h4').text()).toEqual('21.1\u2103');
});

test('LastReading component should display imperial units', () => {
    const data = {id:100, value:69.7567, uom:'f', timestamp: new Date()}
    const wrapper = shallow(
        <LastReading sensorData={data} sensorName='Temperature' />
    );
    expect(wrapper.find('h4').text()).toEqual('69.8\u2109');
});

test('LastReading component should display negative values', () => {
    const data = {id:100, value:-13.4567, uom:'c', timestamp: new Date()}
    const wrapper = shallow(
        <LastReading sensorData={data} sensorName='Temperature' />
    );
    expect(wrapper.find('h4').text()).toEqual('-13.5\u2103');
});

test('LastReading component should display time in correct format', ()=> {
    const data = {id:100, value:21, uom:'c', timestamp: new Date(2017,2,2,10,30,0,0)}
    const wrapper = shallow(
        <LastReading sensorData={data} sensorName='Temperature' />
    );
    expect(wrapper.find('span.timestamp').text()).toEqual('2017-03-02 10:30:00 AM');
});