import React from 'react'
import { Redirect } from 'react-router';
import TimeTrackList from '../components/TimeTrack/TimeTrackList';
import TimeTrackNavigation from '../components/TimeTrack/TimeTrackNavigation';

interface Props {
}

const TimeTrack = (props: Props) => {
    const user = localStorage.getItem('user');

    if (!user) {
        return <Redirect to={"/login"} />
    }


    return (
        <div>
            <TimeTrackNavigation />

            <TimeTrackList />
        </div>
    )
}

export default TimeTrack
