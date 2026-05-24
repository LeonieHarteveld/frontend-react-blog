import './Navigation.css'
import {NavLink} from "react-router-dom";
import LogoMedium from '../../assets/logo-medium.png';


function Navigation() {
    return (
       <nav className="navbar">
           <div className="imageWrapper">
               <img src={LogoMedium} alt="Logo Blogventure"/>
           </div>
           <ul>
               <li>
                   <NavLink
                       className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                       to="/">
                       Home
                   </NavLink>
               </li>
               <li>
                   <NavLink
                       className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                       to="/new-posts">
                       New posts
                   </NavLink>
               </li>
               <li>
                   <NavLink
                       className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                       to="/all-posts">
                       All posts
                   </NavLink>
               </li>
           </ul>
       </nav>
    )
}

export default Navigation