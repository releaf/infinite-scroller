import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { getTitles } from './';
import * as constants from '../constants';

const middleware = [thunk];
const mockStore = createMockStore(middleware);
const titleData = require('../../mock-data/titles.json');

describe('Title actions', () => {
  let store;
  beforeEach(() => {
    const initialState = [];
    store = mockStore(initialState);
  });
  it('should fetch titles', () => {
    fetchMock.getOnce(`${constants.BASE_URL}/kinds/7/titles/featured?kindId=7&offset=0&limit=51`, titleData);
    const expectedActions = [
      { type: constants.GET_TITLES, payload: titleData, },
    ];
    return store.dispatch(getTitles(0, 51))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
