import { GET_TITLES, BASE_URL } from '../constants';
import { fetchData } from './fetch-data';

export function getTitles(offset, limit, type = 'featured') {
  return fetchData(GET_TITLES, {
    url: `${BASE_URL}/kinds/7/titles/${type}?kindId=7&offset=${offset}&limit=${limit}`,
    headers: {
      'ws-api': '2.1',
    },
  });
}
