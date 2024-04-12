import { NavLink } from "react-router-dom"
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
        <NavLink to={'/'}>Accueil</NavLink>
        <NavLink to={'add-post'}>Publier</NavLink>
    </nav>
  )
}

export default NavBar
