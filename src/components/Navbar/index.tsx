import { NavLink } from 'react-router-dom'
import { navPages } from '../../pages/pagesData'
import { Pages } from '../../types/Pages'

export const Navbar: React.FC = () => {
  const links = navPages.map(({ title, path }: Pages) => {
    return <li key={title}><NavLink to={path}>{title.toUpperCase()}</NavLink></li>
  })

  return (

    <nav>
      <div className="nav-wrapper cyan darken-1 px1">
        <NavLink to="/" className="brand-logo">
          Redux + TypeScript
        </NavLink>
        <ul className="right hide-on-med-and-down">
          {links}
        </ul>
      </div>
    </nav>
  )
}
