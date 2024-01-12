import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import OurService from '../../components/OurServices'
import Navbar from '../../layout/Navbar'

const Home = () => {
    return (
        <>
        <Helmet>
            <title>HomePage</title>
        </Helmet>
        <Navbar/>
        <OurService/>
        </>
    )
}

export default Home