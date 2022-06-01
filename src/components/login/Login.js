import React, { useEffect } from 'react'
import LoginForm from './LoginForm'
import { useHistory } from 'react-router-dom'
const Login = () => {
    const history = useHistory()

    const item = localStorage.getItem("user");
    useEffect(() => {
        if (item !== null) {
            history.push('/dashboard')
        }

    }, [item])
    return (
        <div>
            <LoginForm />
        </div>
    )
}

export default Login
