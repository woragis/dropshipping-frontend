import { StyledLogoutComponent } from './style'

export const Logout = () => {
  const logout = async () => {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
  }
  return <StyledLogoutComponent onClick={logout}>Logout</StyledLogoutComponent>
}
