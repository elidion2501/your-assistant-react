
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

export interface TimeTrack {
    description: string,
    time_from: Date,
    time_to: Date,
    id: number,
    slug: string,
    user_id: number,
}

export interface TimeTrackSingle {
    description?: string,
    time_from: Date,
    time_to: Date,
    id: number,
    slug: string,
    user_id: number,
    time_track_type_id: number,
}
export interface TimeTrackSingleError {
    description?: string,
    time_from?: Date,
    time_to?: Date,
}