// 登入相关的请求
import request from '@/utils/requert'

export const getPicCode = () => request({ url: '/captcha/image' })
export const getNumCode = (captchaCode, captchaKey, mobile) => {
  return request({
    url: '/captcha/sendSmsCaptcha',
    method: 'POSt',
    data: {
      form: {
        captchaCode,
        captchaKey,
        mobile
      }
    }
  })
}
export const loginRequest = (mobile, smsCode) => {
  return request({
    url: '/passport/login',
    method: 'POST',
    data: {
      form: {
        isParty: false,
        mobile,
        partyData: {},
        smsCode
      }
    }
  })
}
