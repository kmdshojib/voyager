import { IUser } from "@/interface/user.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialUser extends IUser {
    _id: string
    __v: number

}
// Define the initial state with IUser or null
const initialState: { user: InitialUser | null } = {
    user: null
};

// Create the auth slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginUser: (state, action: PayloadAction<InitialUser>) => {
            state.user = action.payload;
        },
        logoutUser: (state) => {
            state.user = null;
        },
        updateUser: (state, action: PayloadAction<Partial<InitialUser>>) => {
            if (state.user) {
                state.user = { ...state.user, ...action.payload };
            }
        }
    },
});

// Export the actions
export const { loginUser, logoutUser, updateUser } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;
