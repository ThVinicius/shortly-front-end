import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:4000'
})

export function authApi(token) {
  return axios.create({
    baseURL: 'http://localhost',
    headers: { Authorization: `Bearer ${token}` }
  })
}
