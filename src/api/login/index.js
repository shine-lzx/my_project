import request from '@/utils/request'
export function login (data) {
  return request({
    url: '/heatingManageLogin/login',
    method: 'post',
    data
  })
}
