import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const Details = () => {
    const [detail, setDetail] = useState([])
    const { id } = useParams()

    const fetchDetails = async () => {
        const res = await fetch(`http://localhost:5000/api/service/${id}`)
        const jsonData = await res.json()
        setDetail(jsonData)
    }
    useEffect(() => {
        fetchDetails()
    }, []);
    return (
        <>
            {detail ?
                <div>
                    <ul>
                        <i className={detail.icon}></i>
                        <li>{detail.title}</li>
                        <li>{detail.text}</li>
                    </ul>
                </div>
                :
                <></>
    }
        </>
    )
}
