import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/add"}>Add</Link>
        <Link to={"/wishlist"}>Wishlist</Link>
    </nav>
  )
}

export default Navbar