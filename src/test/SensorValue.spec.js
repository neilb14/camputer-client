import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';
import SensorValue from '../components/SensorValue';

test('SensorValue component should display the metric value of the sensor', () => {
    const data = {id:100, value:21, uom:'c', timestamp:new Date()}
    const wrapper = shallow(
        <SensorValue sensorData={data} />
    );
    expect(wrapper.find('h4')).toHaveLength(1);
    expect(wrapper.find('h4').text()).toEqual('21\u2103');
});


test('SensorValue component should display the imperial value of the sensor', () => {
    const data = {id:100, value:21, uom:'f', timestamp:new Date()}
    const wrapper = shallow(
        <SensorValue sensorData={data} />
    );
    expect(wrapper.find('h4')).toHaveLength(1);
    expect(wrapper.find('h4').text()).toEqual('21\u2109');
});


test('SensorValue should use the className if present', () => {
    const data = {id:100, value:21, uom:'f', timestamp:new Date()}
    const wrapper = shallow(
        <SensorValue className="foo" sensorData={data} />
    );
    expect(wrapper.find('h4.foo')).toHaveLength(1);
    expect(wrapper.find('h4.foo').text()).toEqual('21\u2109');
});

test('SensorValue should work without a className', () => {
    const data = {id:100, value:21, uom:'f', timestamp:new Date()}
    const wrapper = shallow(
        <SensorValue sensorData={data} />
    );
    expect(wrapper.find('h4')).toHaveLength(1);
    expect(wrapper.find('h4').text()).toEqual('21\u2109');
});

test('SensorValue component should display negative values', () => {
    const data = {id:100, value:-13.4567, uom:'c', timestamp: new Date()}
    const wrapper = shallow(
        <SensorValue sensorData={data} />
    );
    expect(wrapper.find('h4').text()).toEqual('-13.5\u2103');
});

test('SensorValue component should format the reading value to one decimal place', () => {
    const data = {id:100, value:21.111, uom:'c', timestamp: new Date()}
    const wrapper = shallow(
        <SensorValue sensorData={data} />
    );
    expect(wrapper.find('h4').text()).toEqual('21.1\u2103');
});

test('SensorValue component should display imperial units', () => {
    const data = {id:100, value:69.7567, uom:'f', timestamp: new Date()}
    const wrapper = shallow(
        <SensorValue sensorData={data}  />
    );
    expect(wrapper.find('h4').text()).toEqual('69.8\u2109');
});

