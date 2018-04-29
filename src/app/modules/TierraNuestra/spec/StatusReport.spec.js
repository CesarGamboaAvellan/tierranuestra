import React from 'react';
import { shallow } from 'enzyme';
import StatusReport from '../StatusReport';

describe('< StatusReport />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<StatusReport />);
  });
  test('should render component', () => {
    expect(wrapper.exists()).toBe(true);
  });
  test('Should render header text', () => {
    const header = wrapper.find('h1');

    expect(header.text()).toBe('StatusReport');
  });
});
