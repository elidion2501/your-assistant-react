import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types";
import { RootState } from "../store";



const initialState: User ={
    token: '',
};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            return action.payload
        } 
    }
})
export const { addUser } = userSlice.actions;
export const getUser = (state: RootState) => state.user;

export default userSlice.reducer;