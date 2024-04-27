import { NavLink } from 'react-router-dom'
import {
  navPages,
  unloggedUserPages,
  loggedUserPages,
  adminUserPages,
} from '../../pages/pagesData'
import { Pages } from '../../types/Pages'
import { Logout } from '../Logout'

export const Navbar: React.FC = () => {
  const links = navPages.map(({ title, path }: Pages) => {
    return (
      <li key={title}>
        <NavLink to={path}>{title.toUpperCase()}</NavLink>
      </li>
    )
  })

  const unloggedPages = unloggedUserPages.map(({ title, path }: Pages) => {
    return (
      <li key={title}>
        <NavLink to={path}>{title.toUpperCase()}</NavLink>
      </li>
    )
  })
  const loggedPages = loggedUserPages.map(({ title, path }: Pages) => {
    return (
      <li key={title}>
        <NavLink to={path}>{title.toUpperCase()}</NavLink>
      </li>
    )
  })
  const adminPages = adminUserPages.map(({ title, path }: Pages) => {
    return (
      <li key={title}>
        <NavLink to={path}>{title.toUpperCase()}</NavLink>
      </li>
    )
  })

  const isAdmin = localStorage.getItem('role') === 'admin' ? true : false
  const isLogged = localStorage.getItem('token')

  return (
    <nav>
      <div className="nav-wrapper cyan darken-1 px1">
        <NavLink to="/" className="brand-logo">
          Redux + TypeScript
        </NavLink>
        <ul className="right hide-on-med-and-down">
          {links}
          {isAdmin && adminPages}
          {isLogged && loggedPages}
          {!isLogged && unloggedPages}
          {isLogged && <Logout />}
        </ul>
      </div>
    </nav>
  )
}
