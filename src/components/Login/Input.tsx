import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store.hooks';
import { addUser, getUser } from '../../redux/User/user.slice';
import { FailedLogin, SuccessLogin, User, UserLogin } from '../../types';

interface Props {

}

const Input = (props: Props) => {
    const axios = require('axios');
    const dispatch = useAppDispatch();

    const ruleForEmail = {
        required: { value: true, message: "Email is required." },
        maxLength: { value: 255, message: "Email max length is 255." },
        minLength: { value: 5, message: "Email min length is 5." }
    };

    const ruleForPassword = {
        required: { value: true, message: "Password is required." },
        maxLength: { value: 255, message: "Password max length is 255." },
        minLength: { value: 5, message: "Password min length is 5." }
    };

    const { register, handleSubmit, setError, formState: { errors }, } = useForm<UserLogin>();
    const onSubmit: SubmitHandler<UserLogin> = data => {
        axios.post('http://127.0.0.1:8000/api/auth/login', {
            email: data.email,
            password: data.password,
        }).then(function (response: any) {
            if (response.data.code != 200) {
                let failResponse: FailedLogin = response;
                let errorsBackend: any = failResponse.data.errors;
                Object.keys(errorsBackend).map((item: any, i: any) => (
                    setError(item, {
                        type: "manual",
                        message: errorsBackend[item],
                    })
                ));
            } else {
                let succesResponse: SuccessLogin = response;
                let user: User = succesResponse.data.data;
                dispatch(addUser(user));
                console.log(user);
            }
        });
    }

    return (
        <div className="container d-flex justify-content-end">
            <div className="row  col-lg-6 col-md-8 col-sm-12 col-12">
                <form className="mt-5 " onSubmit={handleSubmit(onSubmit)}>
                    <div className="row mb-3">
                        <label className="col-sm-8 col-form-label">Email</label>
                        <div className="col-sm-12">
                            <input type="email" className="form-control" id="inputEmail"  {...register("email", ruleForEmail)} />
                            <span className="text-danger ">{errors.email && errors.email.message}</span>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-8 col-form-label">Password</label>
                        <div className="col-sm-12">
                            <input type="password" className="form-control" id="inputPassword" {...register("password", ruleForPassword)} />
                            <span className="text-danger">{errors.password && errors.password.message}</span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-start">
                        <button type="submit" className="mt-3 col-sm-3 btn btn-primary">Sign in</button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default Input