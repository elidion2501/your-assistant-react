import React, { useEffect, useState } from 'react'
import ReactDatePicker from 'react-datepicker';
import Moment from 'react-moment';
import { useParams } from 'react-router';
import { TimeTrackSingle, TimeTrackSingleError, UserLogin } from '../types';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { useForm } from 'react-hook-form';


interface Props {
}

interface urlParams {
    slug: string
}

const SingleTimeTrack = (props: Props) => {
    const urlParams = useParams<urlParams>();
    const axios = require('axios');
    const [user, setUser] = useState(localStorage.getItem('user'));
    const [SingleTimeTrack, setSingleTimeTrack] = useState<TimeTrackSingle>();
    const { register, handleSubmit, setError, formState: { errors }, } = useForm<TimeTrackSingleError>();

    useEffect(() => {
        if (user) {
            getTimeTrack(JSON.parse(user))
        }

    }, [])


    const getTimeTrack = (user: any) => {
        axios.get('http://127.0.0.1:8000/api/TimeTrack/' + urlParams.slug, {
            headers: {
                'Authorization': 'Bearer ' + user.token
            },
        }).then(function (response: any) {
            if (response.data.code != 200) {

            } else {
                const responseData: TimeTrackSingle = response.data.data;
                setSingleTimeTrack(responseData)
            }
        });
    }

    const changeDateFrom = (date: Date) => {
        if (SingleTimeTrack) {
            const TestSingleTimeTrack: TimeTrackSingle = SingleTimeTrack;
            setSingleTimeTrack({ ...TestSingleTimeTrack, time_from: date })
        }
    }
    const changeDateTo = (date: Date) => {
        if (SingleTimeTrack) {
            const TestSingleTimeTrack: TimeTrackSingle = SingleTimeTrack;
            setSingleTimeTrack({ ...TestSingleTimeTrack, time_to: date })
        }
    }
    const handleChangeDescription = (event: any) => {
        if (SingleTimeTrack) {
            const TestSingleTimeTrack: TimeTrackSingle = SingleTimeTrack;
            setSingleTimeTrack({ ...TestSingleTimeTrack, description: event.target.value })
        }
    }

    return (
        <div className="container d-flex justify-content-center">

            <div className="row  col-lg-6 col-md-8 col-sm-12 col-12">

                <form className="mt-5 " >
  
                    <div className="row sm-3">
                        <div className="col">
                            <label className="col-form-label">Time from</label>
                            <ReactDatePicker selected={moment(SingleTimeTrack?.time_from).toDate()} onChange={(date: any) => changeDateFrom(date)} />
                            <span className="text-danger">{errors.time_from && errors.time_from.message}</span>
                        </div>
                        <div className="col">
                            <label className="col-form-label">Time to</label>
                            <ReactDatePicker selected={moment(SingleTimeTrack?.time_to).toDate()} onChange={(date: any) => changeDateTo(date)} />
                            <span className="text-danger">{errors.time_to && errors.time_to.message}</span>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-8 col-form-label">Description</label>
                        <div className="col-sm-12">
                            <textarea rows={5} cols={50}
                                value={SingleTimeTrack?.description}
                                className="form-control" id="inputDescription"
                                onChange={handleChangeDescription}
                            />
                            <span className="text-danger">{errors.description && errors.description.message}</span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-start">
                        <button type="submit" className="mt-3 col-sm-3 btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SingleTimeTrack
