export interface UserSignUp {
    nickname: string,
    email: string,
    password: string,
    password_confirmation: string,
}
export interface UserLogin {
    email: string,
    password: string,
}

export interface FailedLogin {
    data: {
        code: number,
        errors: {},

    }
}

export interface SuccessLogin {
    data: {
        code: number,
        data: {
            token: string
        }
    }
}

export interface User {
    token: string;
}