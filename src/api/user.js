import request from '@/utils/request'

export const login = data => {
  return request({
    mathod: 'POST',
    url: '/v1_0/authorizations',
    data
  })
}
export const sendSms = () => {
  return request({
    mathod: 'GET',
    url: '/v1_0/sms/codes/:mobile'
  })
}
