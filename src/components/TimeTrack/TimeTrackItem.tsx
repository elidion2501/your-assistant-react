import { truncate } from 'lodash';
import React from 'react'
import Loader from 'react-loader-spinner';
import Moment from 'react-moment';
import { Redirect, useHistory } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { TimeTrack } from '../../types'

interface Props {
    TimeTrack: TimeTrack;

}


const TimeTrackItem = (props: Props) => {
    const TimeTrack = props.TimeTrack;

    const TimeTrackify = (TimeTrack: TimeTrack): string => {
        return shorten(TimeTrack.description, 50);
    } 

    const shorten = (str: string, len = 50): string => {
        return truncate(str, { length: len });
    }

    const history = useHistory();

    const handleOnSubmit = () => {
        history.push("/single-time-track/" + TimeTrack.slug);
    };


    return (
       
        <tr className="cursor_pointer" onClick={handleOnSubmit} >
            <td><Moment format="LLLL">{TimeTrack.time_from}</Moment></td>
            <td><Moment format="LLLL">{TimeTrack.time_to}</Moment></td>
            <td>{TimeTrackify(TimeTrack)}</td>
        </tr>
    )
}

export default TimeTrackItem
