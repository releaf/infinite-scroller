import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Title from './Title';
import { ASSET_URL } from '../../constants';

describe('Title Component', () => {
  let CompnentWrapper;
  const defaultProps = {
    titleId: 12345,
    title: 'Finding Nemo',
    artKey: 'awesomeArtKey',
    alt: 'Finding Nemo',
    artistName: 'Clown Fish',
  };
  beforeAll(() => {
    CompnentWrapper = mount(<Title { ...defaultProps } />);
  });
  it('renders correctly', () => {
    const lazyLoad = CompnentWrapper.find('LazyLoad');
    const image = lazyLoad.props().children.props.children.props;

    expect(lazyLoad.length).toEqual(1);

    expect(image.src).toEqual(`${ASSET_URL}${defaultProps.artKey}_270.jpeg`);
    expect(image.alt).toEqual(defaultProps.alt);
    expect(CompnentWrapper.find('h5').text()).toBe(defaultProps.title);
    expect(CompnentWrapper.find('h6').text()).toBe(`Starring: ${defaultProps.artistName}`);
  });
});
