const BASE_URL = 'https://jualuc1.dreamhosters.com/wp-json';

export const WPAPI_PATHS = {
  posts: `${BASE_URL}/wp/v2/posts`,
  users: `${BASE_URL}/wp/v2/users`,
  media: `${BASE_URL}/wp/v2/media`,
  members: `${BASE_URL}/buddypress/v1/members`,
}

const options = (method, data, token) => {

  const bearer = {'Authorization': `Bearer ${token}`};

  const optionsOutput = {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  options.headers = token 
    ? { ...bearer, ...options.headers } 
    : options.headers;

  return optionsOutput;
}

export const wpApiFetch = async ({ path, data, method = 'GET', token }) => {

  try {
    const response = await fetch(path, options(method, data, token));
    return response.json();
  } catch(error) {
    // any error handling code goes here
    console.error('wpApiFetch() error\n', error);
  }
}