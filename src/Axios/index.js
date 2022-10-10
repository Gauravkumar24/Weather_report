import axios from 'axios';

let token = null;
let setToken = false;
export const instance = axios.create({
  baseURL: 'http://52.73.146.184:3000/api/app/user',
});
export const instance2 = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/onecall',
});

export const parsedError = response => {
  let message = response?.message || 'Something unexpected happened!';
  if (typeof message === 'object') {
    message = JSON.stringify(message);
  }
  if (response?.status === 401) {
    return Promise.reject({
      message: message || 'Your session is expired. Please Login.',
      status: response?.status,
    });
  } else if (response?.status === 404) {
    return Promise.reject({
      message: message || 'Resource not found!',
      status: response?.status,
    });
  } else {
    let errorMessage = '';
    const errorData = response?.data?.error;

    if (errorData) {
      delete errorData?.config;
      delete errorData?.stack;
      errorMessage = JSON.stringify(errorData);
    }
    return Promise.reject({
      message: errorMessage.length ? errorMessage + '. ' + message : message,
      status: response?.status,
    });
  }
};

export const parseBody = response => {
  if (response && (response.data === null || response.data === undefined)) {
    return Promise.reject({message: 'Resource Not Found'});
  }

  let exception = true;

  if (response.data && (response?.status === 200 || response?.status === 201)) {
    exception = false;
  }
  return exception ? parsedError(response) : response.data;
};

instance.interceptors.request.use(
  config => {
    config.headers['Access-Control-Allow-Origin'] = '*';
    config.headers['content-type'] = 'application/json';
    if (setToken) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
instance.interceptors.response.use(
  response => {
    const result = parseBody(response);
    return result;
  },
  error => {
    return parsedError(error.response);
  },
);

instance2.interceptors.request.use(
  config => {
    config.headers['Access-Control-Allow-Origin'] = '*';
    config.headers['content-type'] = 'application/json';
    if (setToken) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
instance2.interceptors.response.use(
  response => {
    const result = parseBody(response);
    return result;
  },
  error => {
    return parsedError(error.response);
  },
);
export const api2 = {
  get: url => {
    return new Promise((resolve, reject) => {
      instance
        .get(url)
        .then(result => {
          resolve(result);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
};

export const api = {
  get: url => {
    return new Promise((resolve, reject) => {
      instance
        .get(url)
        .then(result => {
          resolve(result);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
};
