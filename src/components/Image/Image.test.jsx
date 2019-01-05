import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Image from './Image';

describe('Image Component', () => {
  let ComponentWrapper;
  const defaultProps = {
    title: 'Finding Nemo',
    alt: 'Finding Nemo',
    src: 'https://test-image.com/test.jpg',
    onLoad: jest.fn(),
  };
  beforeAll(() => {
    ComponentWrapper = mount(<Image { ...defaultProps } />);
  });
  it('renders correctly', () => {
    expect(ComponentWrapper.prop('src')).toEqual(defaultProps.src);
    expect(ComponentWrapper.prop('alt')).toEqual(defaultProps.alt);
    expect(ComponentWrapper.prop('title')).toEqual(defaultProps.title);
    expect(ComponentWrapper.find('img').prop('className')).toEqual('img-loading');
  });
  it('gets the correct classes when the onLoad function fires', () => {
    ComponentWrapper.find('img').simulate('load');
    expect(ComponentWrapper.find('img').prop('className')).toEqual('img-loaded');
  });
});
