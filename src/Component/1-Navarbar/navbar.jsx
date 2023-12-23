import { useSelector } from 'react-redux'
import './navbar.css'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
const cart= useSelector((state)=>state.cart)
  return (
    <div className="nav  flex">
      <div className='nav-logo'>
      <h2>CartApp</h2> 
      </div>
      <ul className='flex '>
        <li><NavLink to="/" >products</NavLink></li>
        <li><NavLink  to="/Cart">Cart-{cart.length}</NavLink></li>
      </ul>  










    </div>
  )
}

