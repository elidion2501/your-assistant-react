import React from 'react'
import { Redirect } from 'react-router';
import Input from '../components/SignUp/Input'

interface Props {
    checkAuth: () => void
}

const SignUp = (props: Props) => {
    const user = localStorage.getItem('user');

    if (user) {
        return <Redirect to={"/"} />
    }
    return (
        <div>
            <Input checkAuth={props.checkAuth}/>
        </div>
    )
}

export default SignUp
