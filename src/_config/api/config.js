import axios from "axios"

export const api = axios.create({
    baseURL: 'https://5d6da1df777f670014036125.mockapi.io',
  //  timeout: 2000,
    headers: {'X-Custom-Header': 'foobar'}
});
