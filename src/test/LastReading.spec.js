import raf from './helpers/tempPolyfills';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import { shallow, mount } from 'enzyme';
import LastReading from '../components/LastReading';

global.requestAnimationFrame = function(callback) {
    setTimeout(callback, 0);
};

beforeEach(()=>{

});

test('LastReading component should display the name of the sensor', () => {
    const data = {id:100, value:21, uom:'c', timestamp: new Date()}
    const wrapper = shallow(
        <LastReading sensorData={data} sensorName='Temperature' />
    );
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('h2').text()).toEqual('Temperature');
});

test('LastReading component should display the SensorValue of the last reading', () => {
    const data = {id:100, value:21, uom:'c', timestamp: new Date()}
    const wrapper = mount(
        <LastReading sensorData={data} sensorName='Temperature' />
    );
    expect(wrapper.find('h4')).toHaveLength(1);
    expect(wrapper.find('h4').text()).toEqual('21\u2103');
});

test('LastReading component should display time in correct format', ()=> {
    const data = {id:100, value:21, uom:'c', timestamp: new Date(2017,2,2,10,30,0,0)}
    const wrapper = shallow(
        <LastReading sensorData={data} sensorName='Temperature' />
    );
    expect(wrapper.find('span.timestamp').text()).toEqual('2017-03-02 10:30 AM');
});