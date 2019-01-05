export function fetchData(type = null, {
  url,
  method = 'GET',
  body,
  headers = {},
} = {}) {
  return dispatch => fetch(url, {
    method,
    headers,
    body,
  })
    .then((response) => {
      if (response.status >= 400) {
        return response.json()
          .then(payload => console.warn(payload));
      } else {
        return response.json()
          .then(payload => dispatch({ type, payload }));
      }
    })
    .catch(error => console.warn(error));
}
