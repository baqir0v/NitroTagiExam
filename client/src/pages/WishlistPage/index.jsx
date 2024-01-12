import React from 'react'
import { useContext } from 'react'
import { WishlistContext } from '../../Context'
import Navbar from '../../layout/Navbar'

export default function WishlistPage() {
    const { wishlist, addWishlist } = useContext(WishlistContext)

    return (
        <div>
            <Navbar/>
            {wishlist && wishlist.map((item) => (
                <ul>
                    <i className={item.icon}></i>
                    <li>{item.title}</li>
                    <li>{item.text}</li>
                </ul>
            ))}
        </div>
    )
}
