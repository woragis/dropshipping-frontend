import {
  navPages,
  unloggedUserPages,
  loggedUserPages,
  adminUserPages,
} from '../../pages/pagesData'
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

  const isAdmin = localStorage.getItem('role') === 'admin' ? true : false
  const isLogged = localStorage.getItem('token')

  return (
    <StyledHeader>
      <StyledLogo>
        Loja de Comprar Produtos <small>eu acho</small>
      </StyledLogo>
      <StyledLinks>
        {links}
        {isAdmin && adminPages}
        {isLogged && loggedPages}
        {!isLogged && unloggedPages}
        {isLogged && <Logout />}
      </StyledLinks>
    </StyledHeader>
  )
}
