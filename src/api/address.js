import request from '@/utils/request'

// 获取收货地址列表
export function getAddressList() {
  return request({
    url: '/ums/umsmemberreceiveaddress/list',
    method: 'get'
  })
}

// 添加收货地址
export function addAddress(params) {
  return request({
    url: '/ums/umsmemberreceiveaddress',
    method: 'post',
    data: params
  })
}

// 获取当前用户默认收货地址
export function defaultAddress() {
  return request({
    url: '/ums/umsmemberreceiveaddress/default',
    method: 'get'
  })
}