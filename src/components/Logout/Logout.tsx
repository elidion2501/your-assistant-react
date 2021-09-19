import React from 'react'
import { Redirect } from 'react-router'

interface Props {
    checkAuth: () => void
}


const Logout = (props: Props) => {
    localStorage.removeItem("user")
    props.checkAuth();
    return <Redirect to={"/login"} />

}

export default Logout
