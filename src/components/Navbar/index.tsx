import { useSelector } from 'react-redux'
import {
  navPages,
  unloggedUserPages,
  loggedUserPages,
  adminUserPages,
} from '../../pages/pagesData'
import { RootState } from '../../redux'
import { Pages } from '../../types/Pages'
import { Logout } from '../Logout'
import { StyledHeader, StyledLinks, StyledLink, StyledLogo } from './style'

export const Navbar: React.FC = () => {
  const links = navPages.map(({ title, path }: Pages) => {
    return (
      <StyledLink key={title} to={path}>
        {title.toUpperCase()}
      </StyledLink>
    )
  })

  const unloggedPages = unloggedUserPages.map(({ title, path }: Pages) => {
    return (
      <StyledLink key={title} to={path}>
        {title.toUpperCase()}
      </StyledLink>
    )
  })
  const loggedPages = loggedUserPages.map(({ title, path }: Pages) => {
    return (
      <StyledLink key={title} to={path}>
        {title.toUpperCase()}
      </StyledLink>
    )
  })
  const adminPages = adminUserPages.map(({ title, path }: Pages) => {
    return (
      <StyledLink key={title} to={path}>
        {title.toUpperCase()}
      </StyledLink>
    )
  })

  const { token, admin } = useSelector((state: RootState) => state.auth)

  return (
    <StyledHeader>
      <StyledLogo>
        Loja de Comprar Produtos <small>eu acho</small>
      </StyledLogo>
      <StyledLinks>
        {links}
        {admin && adminPages}
        {token && loggedPages}
        {!token && unloggedPages}
        {token && <Logout />}
      </StyledLinks>
    </StyledHeader>
  )
}
