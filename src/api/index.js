import axios from 'axios'
import router from '../router'

const DOMAIN = 'https://buzzni.czarcie.shop'

const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data,
  }).then(result => result.data)
}

export const reqApi = {
  validate(url) {
    console.log(url)
    return request('get', url )
  },
  refresh(token) {
    return request('post', '/token/refresh/', {
      token:token
    })
  }
}
