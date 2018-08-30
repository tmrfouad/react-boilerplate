import DashbourdPage from '../../components/DashbourdPage';
import React from 'react';
import { shallow } from 'enzyme';

test('should render the dashboard page correctly', () => {
  const wrapper = shallow(<DashbourdPage />);
  expect(wrapper).toMatchSnapshot();
});
