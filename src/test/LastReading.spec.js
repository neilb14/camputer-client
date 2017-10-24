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
    expect(wrapper.find('h4').text()).toEqual('21c');
});

test('LastReading component should format the reading value to one decimal place', () => {
    const data = {id:100, value:21.111, uom:'c', timestamp: new Date()}
    const wrapper = shallow(
        <LastReading sensorData={data} sensorName='Temperature' />
    );
    expect(wrapper.find('h4').text()).toEqual('21.1c');
});

