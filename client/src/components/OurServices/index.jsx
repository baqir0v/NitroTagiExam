import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import "./index.scss"
import { Link } from 'react-router-dom'
import { WishlistContext } from '../../Context'

const OurService = () => {
    const [data, setData] = useState([])
    const {wishlist,addWishlist} = useContext(WishlistContext)

    const fetchData = async () => {
        const res = await fetch("http://localhost:5000/api/service")
        const jsonData = await res.json()
        setData(jsonData)
    }

    useEffect(() => {
        fetchData()
    }, []);
    
    return (
        <section id='ourservice'>
            <div className='esli'>
                {data && data.map((item) => (
                    <ul key={item._id}>
                        <i className={item.icon}></i>
                        <li>{item.title}</li>
                        <li>{item.text}</li>
                        <button onClick={()=>addWishlist(item)}>Add To Wishlist</button>
                        <br />
                        <Link to={`/${item._id}`}>Details</Link>
                    </ul>
                ))}
            </div>
        </section>
    )
}

export default OurService