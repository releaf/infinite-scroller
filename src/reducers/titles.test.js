import * as constants from '../constants';
import titles from './titles';

const titleData = require('../../mock-data/titles.json');

describe('Titles reducer', () => {
  describe('getting titles', () => {
    it('should add titles to the store', () => {
      const action = { type: constants.GET_TITLES, payload: titleData, error: false };
      const state = titles([], action);
      expect(state).toHaveLength(6);
      expect(state[0].id).toEqual(titleData[0].id);
    });
  });
});
