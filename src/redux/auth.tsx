import Cookie from 'js-cookie'

const initialState = {
  admin: false,
  token: null,
  username: null,
}

const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGOUT = 'LOGOUT'

export const loginSuccess = (admin: any, token: any, username: any) => ({
  type: LOGIN_SUCCESS,
  payload: { admin, token, username },
})

export const logout = () => ({
  type: LOGOUT,
})

const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const { admin, token, username } = action.payload
      const expirationDate = new Date(new Date().getTime() + 30 * 60 * 1000)
      Cookie.set('admin', admin, { expires: expirationDate, path: '/' })
      Cookie.set('token', token, { expires: expirationDate, path: '/' })
      Cookie.set('username', username, { expires: expirationDate, path: '/' })
      return { ...state, admin, token, username }
    case LOGOUT:
      return { ...initialState }
    default:
      return state
  }
}

export default authReducer
