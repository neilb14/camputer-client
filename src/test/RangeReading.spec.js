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
    expect(wrapper.find('SensorValue')).toHaveLength(2);
    expect(wrapper.find('SensorValue[className="low"]')).toHaveLength(1);
    expect(wrapper.find('SensorValue[className="high"]')).toHaveLength(1);
});
