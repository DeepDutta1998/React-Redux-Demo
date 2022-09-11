import React from 'react'
import { Link } from 'react-router-dom';
// get data from store cart data
 import { useSelector } from 'react-redux';

export const Navbar = () => {
    //ai function modhe dite hoy kon model data subscribe korbo 
    const items=useSelector((state)=>state.cart)
  return (
    <div
    style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }}
>
    <span className="logo">REDUX STORE</span>
    <div>
        <Link className="navLink" to="/">
            Home
        </Link>
        <Link className="navLink" to="/cart">
            Cart ({items.length})
        </Link>
        <span className="cartCount">Cart items  ({items.length})</span>
    </div>
</div>
);
}
