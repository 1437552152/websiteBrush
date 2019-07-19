import axios from 'axios'

// axios 配置
axios.defaults.timeout = 50000

// const env = process.env.NODE_ENV
// if (env === 'development') {
axios.defaults.baseURL = 'https://api.exchief.pro'
axios.defaults.withCredentials = true
// }

axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})
axios.interceptors.response.use(response => {
  return response
}, error => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        // 401 跳转到登录页面
        console.log('error')
    }
  }
  return Promise.resolve(error.response)
})

const buildGetUrl = function (url, params) {
  var result = Object.params(params, true)
  if (result) return url + '?' + result
  return url
}

export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(buildGetUrl(url, params)).then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function post(url, params) {
  let searchParams = new URLSearchParams()
  for (let key in params) {
    searchParams.append(key, params[key])
  }
  return new Promise((resolve, reject) => {
    if (localStorage.getItem('LoginFlag')) {
      axios.post(url, searchParams, {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
          'x-auth-token': localStorage.getItem('LoginFlag')
        }
      }).then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      }).catch((error) => {
        reject(error)
      })
    } else {
      axios.post(url, searchParams, {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded'
        }
      }).then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      }).catch((error) => {
        reject(error)
      })
    }
  })
}
export default {
  /* gt初始化验证 */
  Gtcaptcha(params) {
    return post('/uc/start/captcha', params)
  },
  /* 获得短信验证码 */
  Messagecode(params) {
    return post('/uc/mobile/code', params)
  },
  /* 获得邮箱验证码 */
  Emailcode(params) {
    return post('/uc/register/email', params)
  },
  // 获得国家
  Getcountry(params) {
    return post('/uc/support/country', params)
  },

  /* 手机注册 */
  Phoneregister(params) {
    return post('/uc/register/phone', params)
  }
}
