import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loader from '../components/Loader'

const Author = () => {

    const [authors, setAuthors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getAuthors = async () => {
            setIsLoading(true)
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users`)
                setAuthors(response.data)
            } catch (error) {
                console.log(error)
            }
            setIsLoading(false)
        }
        getAuthors()
    }, [])

    if (isLoading) {
        return <Loader />
    }

    return (
        <section className='authors h-full'>
            {authors.length > 0 ?
                <div className='container authors-container'>
                    {
                        authors.map(({ _id: id, avatar, name, posts }) => {
                            return <Link to={`/posts/users/${id}`} className='author'>
                                <div className='author-avatar'>
                                    <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${avatar}`} alt={`avatar of ${name}`} />
                                </div>
                                <div className='author-info'>
                                    <h4>{name}</h4>
                                    <p>{posts} {posts > 1 ? "posts" : "post"}</p>
                                </div>
                            </Link>
                        })
                    }
                </div> : <h2 className='center h-full'>No authors found.</h2>}
        </section>
    )
}

export default Author