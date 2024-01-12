import React, { useEffect, useState } from 'react'
import axios from "axios"
import Navbar from '../../layout/Navbar'
import { Link } from 'react-router-dom'

function AddPage() {
    const [title, settitle] = useState("")
    const [icon, setIcon] = useState("")
    const [text, setText] = useState("")
    const [data, setData] = useState([])

    const fetchData = async () => {
        const res = await fetch("http://localhost:5000/api/service")
        const jsonData = await res.json()
        setData(jsonData)
    }

    useEffect(() => {
        fetchData()
    }, []);

    const handleDelete = async (_id) => {
        try {
            const res = await axios.delete(`http://localhost:5000/api/service/${_id}`)
            fetchData()
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    }

    const handleAdd = async () => {
        const esli = await axios.post("http://localhost:5000/api/service", {
            title: title,
            icon: icon,
            text: text
        })
        setIcon("")
        setText("")
        settitle("")
    }
    return (
        <div>
            <Navbar />
            <input type="text" onChange={(e) => setIcon(e.target.value)} placeholder='Icon' />
            <br />
            <input type="text" onChange={(e) => settitle(e.target.value)} placeholder='Title' />
            <br />
            <input type="text" onChange={(e) => setText(e.target.value)} placeholder='Text' />
            <br />
            <button onClick={() => handleAdd()}>Nazile</button>
            <div className='emirxan'>
                <table>
                    <tr>
                        <th>Icon</th>
                        <th>Title</th>
                        <th>Text</th>
                        <th>Details</th>
                        <th>Delete</th>
                    </tr>
                    {data && data.map((item) => (
                        <tr key={item._id}>
                            <td><i className={item.icon}></i></td>
                            <td>{item.title}</td>
                            <td>{item.text}</td>
                            <td><Link to={`/${item._id}`}>Details</Link></td>
                            <td><button onClick={()=>handleDelete(item._id)}>Delete</button></td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default AddPage