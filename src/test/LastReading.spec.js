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

test('LastReading component should display the SensorValue of the last reading', () => {
    const data = {id:100, value:21, uom:'c', timestamp: new Date()}
    const wrapper = shallow(
        <LastReading sensorData={data} sensorName='Temperature' />
    );
    expect(wrapper.find('SensorValue')).toHaveLength(1);
});

test('LastReading component should display time in correct format', ()=> {
    const data = {id:100, value:21, uom:'c', timestamp: new Date(2017,2,2,10,30,0,0)}
    const wrapper = shallow(
        <LastReading sensorData={data} sensorName='Temperature' />
    );
    expect(wrapper.find('span.timestamp').text()).toEqual('2017-03-02 10:30:00 AM');
});