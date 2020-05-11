import Cookies from 'js-cookie'

const TokenKey = 'token'
const UserNameKey = 'username'
const PassWordKey = 'password'

// Token的Cookie操作
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

// username的Cookie操作
export function getUserName() {
  return Cookies.get(UserNameKey)
}

export function setUserName(username) {
  return Cookies.set(UserNameKey, username)
}

export function removeUserName() {
  return Cookies.remove(UserNameKey)
}

// password的Cookie操作
export function getPassWord() {
  return Cookies.get(PassWordKey)
}

export function setPassWord(password) {
  return Cookies.set(PassWordKey, password)
}

export function removePassWord() {
  return Cookies.remove(PassWordKey)
}

