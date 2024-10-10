import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '/logo.jpg';
import cart_icon from '/cart1.png';
import admin from '/admin.png'

function Navbar()  {

    const [menu,setMenu] = useState("shop");
    

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo}  alt=""  id="logo"/> 
            <p>Little Bites Boutique</p>     
            </div>


      <ul className="nav-menu">
      <li onClick={()=> setMenu("shop")}><Link style={{textDecoration: 'none'}}to='/'>Shop</Link> {menu === "shop" ? <hr/>:null}</li>
        <li onClick={()=> setMenu("costumes")}><Link style={{textDecoration: 'none'}} to='/costumes'>Costumes</Link> {menu === "costumes" ? <hr />:null}</li>
        <li onClick={()=> setMenu("accessories")}><Link style={{textDecoration: 'none'}} to='/accessories'>Assorties</Link> {menu === "accessories" ? <hr />:null}</li>
      </ul>

      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" id="icon"/>
        <div className="nav-cart-count">0</div></Link>
      </div>

      <div className="nav-admin">
      <Link to='/admin'><img src={admin} alt="" id="admin"/> </Link> 
      </div>
    </div>
  )
}

export default Navbar;