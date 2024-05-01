// actions
export const LOGOUT = 'LOGOUT'
export const LOGIN = 'LOGIN'

// action interfaces
interface LoginAction {
  type: typeof LOGIN
  payload: {
    token: string
    username: string
    admin: boolean
  }
}

interface LogoutAction {
  type: typeof LOGOUT
}

// action creators
export const logout = (): LogoutAction => ({
  type: LOGOUT,
})

export const login = (
  token: string,
  username: string,
  admin: boolean
): LoginAction => ({
  type: LOGIN,
  payload: {
    token,
    username,
    admin,
  },
})
