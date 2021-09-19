import React from 'react'
import { Redirect } from 'react-router';
import Input from '../components/Login/Input'

interface Props {
    checkAuth: () => void
}


const Login = (props: Props) => {
    const user = localStorage.getItem('user');

    if (user) {
        return <Redirect exact to={"/"} />
    }
    return (
        <div>
            <Input checkAuth={props.checkAuth}/>
        </div>
    )
}

export default Login
