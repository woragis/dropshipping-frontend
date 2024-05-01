import { useDispatch } from 'react-redux'
import { StyledLogoutComponent } from './style'
import { logout } from '../../redux/auth/actions'

export const Logout = () => {
  const dispatch = useDispatch()
  return (
    <StyledLogoutComponent onClick={() => dispatch(logout())}>
      Logout
    </StyledLogoutComponent>
  )
}
