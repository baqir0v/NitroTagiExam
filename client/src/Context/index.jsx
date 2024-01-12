import React, { createContext, useEffect, useState } from 'react'

export const WishlistContext = createContext()

export const WishlistProvider = ({children}) => {
    const [wishlist, setWishlist] = useState(localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")) : [])

    const addWishlist = (product) => {
        const wishlistProduct = wishlist.find(x => (x._id === product._id))
        if (!wishlistProduct) {
            setWishlist([...wishlist, product])
        }
        else (
            setWishlist(wishlist.filter(x => x._id !== product._id))
        )
    }

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist))
    }, [wishlist])

    const data = {wishlist,addWishlist}

    return (
        <WishlistContext.Provider value={data}>
            {children}
        </WishlistContext.Provider>
    )
}
