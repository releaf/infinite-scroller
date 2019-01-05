import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Grid from './Grid';
const titles = require('../../../mock-data/titles.json');


describe('Grid Component', () => {
  let ComponentWrapper;
  const defaultProps = {
    titles,
  };
  beforeAll(() => {
    ComponentWrapper = mount(<Grid { ...defaultProps } />);
  });
  it('renders correctly', () => {
    expect(ComponentWrapper.find('h2').text()).toBe('Featured Titles');
    expect(ComponentWrapper.find('Title').length).toBe(6);
  });
});
