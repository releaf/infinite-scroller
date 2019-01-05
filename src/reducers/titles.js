import { GET_TITLES } from '../constants';

export default function titles(state = [], action) {
  switch (action.type) {
    case GET_TITLES: {
      const titleData = action.payload;
      return [...state, ...titleData];
    }
    default:
      return state;
  }
}
