export function checkHttpStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export function parseJSON(response) {
  return response.json();
}

class Api {
  static jsonService(url, method, data, token) {
    let options = { method };
    let headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    if (data) {
      options = { ...options, body: JSON.stringify(data) };
    }
    if (token) {
      headers = { ...headers, Authorization: token };
    }
    options = { ...options, headers };
    return new Promise((resolve, reject) => {
      fetch(url, options)
        .then(checkHttpStatus)
        .then(parseJSON)
        .then(json => resolve(json))
        .catch(err => reject(err));
    });
  }
}

export default Api;
