import axios from 'axios'
import router from '../router'

const DOMAIN = 'https://buzzni.czarcie.shop'

const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data
  }).then(result => result.data)
    .catch(result => {
      const {status} = result.response
    })
}

export const reqApi = {
  validate(token) {
    return request('get', '/validate/', {token:token})
  },
  refresh(token) {
    return request('post', '/token/refresh/', {
      token:token
    })
  }
}
