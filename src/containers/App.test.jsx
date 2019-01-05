import React from 'react';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import App from './App';
import { mountWithStore } from '../helpers/test-utils/enzyme-with-store';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const titles = require('../../mock-data/titles.json');

describe('App Component', () => {
  let ComponentWrapper;
  const defaultProps = {
    getTitles: jest.fn(),
  };
  const store = mockStore({ titles });
  beforeAll(() => {
    ComponentWrapper = mountWithStore(<App { ...defaultProps } />, store);
  });
  it('has the correct heading', () => {
    expect(ComponentWrapper.find('h1').text()).toBe('Movies');
  });
  it('renders a <LazyLoad /> for each title', () => {
    expect(ComponentWrapper.find('.LazyLoad').length).toBe(6);
  });
  // TODO: Add tests for the scroll events
});
