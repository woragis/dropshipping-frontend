import { LOGIN, LOGOUT } from './actions'

export const getLoginCookie = (): {
  token: string
  username: string
  admin: boolean
} => {
  const cookieValue = document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith('loginInfo='))
  if (cookieValue) {
    const encodedLoginInfo = cookieValue.split('=')[1]
    const decodedLoginInfo = decodeURIComponent(encodedLoginInfo)
    const loginInfo: UserState = JSON.parse(decodedLoginInfo)
    return loginInfo
  } else {
    return { token: '', username: '', admin: false }
  }
}

export const clearLoginCookie = () => {
  document.cookie = 'loginInfo=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
}

export const setLoginCookie = (
  token: string,
  username: string,
  admin: boolean
) => {
  const loginInfo = JSON.stringify({ token, username, admin })
  const expirationDate = new Date()
  expirationDate.setDate(expirationDate.getDate() + 7)
  document.cookie = `loginInfo=${encodeURIComponent(
    loginInfo
  )}; expires=${expirationDate.toUTCString()}; path=/`
}

interface UserState {
  token: string
  username: string
  admin: boolean
}

const initialState: UserState = getLoginCookie()

interface AuthPayload {
  type: typeof LOGIN | typeof LOGOUT
  payload: {
    token: string
    username: string
    admin: boolean
  }
}

export const authReducer = (
  state: UserState = initialState,
  action: AuthPayload = {} as AuthPayload
): UserState => {
  switch (action.type) {
    case LOGIN:
      // console.log(state,'\ntoken: ',action.payload.token,'\nusername: ',action.payload.username,'\nadmin: ',action.payload.admin)
      setLoginCookie(
        action.payload.token,
        action.payload.username,
        action.payload.admin
      )
      return {
        ...state,
        token: action.payload.token,
        username: action.payload.username,
        admin: action.payload.admin,
      }
    case LOGOUT:
      clearLoginCookie()
      return {
        ...state,
        token: initialState.token,
        username: initialState.username,
        admin: initialState.admin,
      }
    default:
      return state
  }
}

export default authReducer
