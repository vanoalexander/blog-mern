import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { UserContext } from '../context/userContext'

const Logout = () => {
    const { setCurrentUser } = useContext(UserContext)
    const navigate = useNavigate();

    const { currentUser } = useContext(UserContext)
    const token = currentUser?.token

    //redirect to login page for any user who isn't logged in
    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    }, [])

    setCurrentUser(null)
    navigate('/login')
    return (
        <></>
    )
}

export default Logout