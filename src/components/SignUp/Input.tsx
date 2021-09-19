import { useForm, SubmitHandler } from "react-hook-form";
import { Redirect } from "react-router";
import { FailedLogin, SuccessLogin, User, UserSignUp } from '../../types';
interface Props {
    checkAuth: () => void
}

const Input = (props: Props) => {
    const axios = require('axios');

    const ruleForNickname = {
        required: { value: true, message: "Nickname is required." },
        maxLength: { value: 25, message: "Nickname max length is 25." },
        minLength: { value: 5, message: "Nickname min length is 5." }
    };
    const ruleForEmail = {
        required: { value: true, message: "Email is required." },
        maxLength: { value: 25, message: "Email max length is 25." },
        minLength: { value: 5, message: "Email min length is 5." }
    };
    const ruleForPassword = {
        required: { value: true, message: "Password is required." },
        maxLength: { value: 25, message: "Password max length is 25." },
        minLength: { value: 5, message: "Password min length is 5." }
    };
    const ruleForPasswordConfirmation = {
        required: { value: true, message: "PasswordConfirmation is required." },
        maxLength: { value: 25, message: "PasswordConfirmation max length is 25." },
        minLength: { value: 5, message: "PasswordConfirmation min length is 5." }
    };

    const { register, handleSubmit, setError, formState: { errors }, } = useForm<UserSignUp>();
    const onSubmit: SubmitHandler<UserSignUp> = data => {
        axios.post('http://127.0.0.1:8000/api/auth/signUp', {
            nickname: data.nickname,
            email: data.email,
            password: data.password,
            password_confirmation: data.password_confirmation,
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
                localStorage.setItem('user', JSON.stringify(user));
                props.checkAuth()
                return <Redirect to={"/"} />

            }
        });
    }

    return (
        <div className="container d-flex justify-content-end">
            <div className="row  col-lg-6 col-md-8 col-sm-12 col-12">
                <form className="mt-5 " onSubmit={handleSubmit(onSubmit)}>
                    <div className="row mb-3 ">
                        <label className="col-sm-8 col-form-label">Nickname</label>
                        <div className="col-sm-12">
                            <input type="nickname" className="form-control" id="inputNickname" {...register("nickname", ruleForNickname)} />
                            <span className="text-danger">{errors.nickname && errors.nickname.message}</span>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-8 col-form-label">Email</label>
                        <div className="col-sm-12">
                            <input type="email" className="form-control" id="inputEmail" {...register("email", ruleForEmail)} />
                            <span className="text-danger">{errors.email && errors.email.message}</span>

                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-8 col-form-label">Password</label>
                        <div className="col-sm-12">
                            <input type="password" className="form-control" id="inputPassword" {...register("password", ruleForPassword)} />
                            <span className="text-danger">{errors.password && errors.password.message}</span>

                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-8 col-form-label">Password confirmation</label>
                        <div className="col-sm-12">
                            <input type="password" className="form-control" id="inputPasswordConfirmation" {...register("password_confirmation", ruleForPasswordConfirmation)} />
                            <span className="text-danger">{errors.password_confirmation && errors.password_confirmation.message}</span>

                        </div>
                    </div>
                    <div className="row mb-3 " >
                        <div className="col-sm-6 col-6">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" >
                                    Conditions terms
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-start">
                        <button type="submit" className="mt-2 col-sm-4 btn btn-primary">Sign in</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Input
