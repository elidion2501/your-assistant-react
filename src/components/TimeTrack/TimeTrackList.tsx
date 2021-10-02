import { useEffect, useState } from 'react'
import Loader from 'react-loader-spinner';
import { Redirect } from 'react-router';
import { TimeTrack } from '../../types';
import TimeTrackItem from './TimeTrackItem'

interface Props {
}


const TimeTrackList = (props: Props) => {
    const axios = require('axios');
    const [user, setUser] = useState(localStorage.getItem('user'));
    const [TimeTrack, setTimeTrack] = useState<TimeTrack[]>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (user) {
            getTimeTrack(JSON.parse(user))
        }

    }, [])


    const getTimeTrack = (user: any) => {
        axios.get('http://127.0.0.1:8000/api/TimeTrack', {
            headers: {
                'Authorization': 'Bearer ' + user.token
            },
        }).then(function (response: any) {
            if (response.data.code != 200) {

            } else {
                setLoading(false);
                setTimeTrack(response.data.data.data)
            }
        });
    }



    return (
        <div className="container">

            <table className=" col-12 table table-hover text-center">
                <thead>
                    <tr>
                        <th scope="col">Time from</th>
                        <th scope="col">Time to</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>

                <div className="position-absolute bottom-50 end-50">
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        visible={loading}
                    />
                </div>

                <tbody>
                    {TimeTrack?.map(TimeTrackOne => (
                        <TimeTrackItem key={TimeTrackOne.id} TimeTrack={TimeTrackOne} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TimeTrackList
