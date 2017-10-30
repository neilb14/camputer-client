import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';
import RangeChart from '../components/RangeChart';

test('RangeChart should show a chart object', () => {
    const data = [{value:12},{value:13},{value:14},{value:15}]
    const wrapper = shallow(
        <RangeChart sensorData={data} />
    );
    expect(wrapper.find('LineChart')).toHaveLength(1);
});
