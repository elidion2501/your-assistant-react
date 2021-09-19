import React from 'react'
import { Redirect } from 'react-router';

interface Props {

}

const TimeTrack = (props: Props) => {
    const user = localStorage.getItem('user');

    if (!user) {
        return <Redirect to={"/login"} />
    }
    
    return (
        <div>

        </div>
    )
}

export default TimeTrack
