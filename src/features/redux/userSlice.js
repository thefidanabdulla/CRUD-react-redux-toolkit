import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "idle",
    error: null,
    selectedUser: {},
    user: {
        ids: [],
        entities: {},
    }
}

const sliceInvoker = () => {
    return {
        name: "users",
        initialState,
        reducers: {},
        extraReducers: {}
    }
    
}

const userSlice = createSlice(sliceInvoker());

export default userSlice.reducer;