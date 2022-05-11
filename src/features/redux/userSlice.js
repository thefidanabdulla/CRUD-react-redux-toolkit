import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const adapterizer = () => {
    return {
        selecIds: (user) => user.id,
        sortComparer: (preUser, nextUser) => nextUser.id.localCompare(preUser.id),
    }
}

const usersAdapter = createEntityAdapter(adapterizer());

const initialState = {
    status: "idle",
    error: null,
    selectedUser: {},
    users: {
        ids: [],
        entities: {},
    }
}

const sliceInvoker = () => {
    return {
        name: "users",
        initialState,
        reducers: {
            addUser: (state, action) => {
                usersAdapter.addOne(state.users, action.payload)
            },
            deleteUser: (state, action) => {
                const {userId} = action.payload;
                usersAdapter.removeOne(state.users, userId)
            },
            updateUser: (state, action) => {
                const {userId} = action.payload;
                usersAdapter.updateOne(state.users, userId)
            }
        },
        extraReducers: {}
    }

}

const userSlice = createSlice(sliceInvoker());

export const {
    selectAll: selectAllUsers,
    selectById: selectUserById,
    selectEntities: selectAllEntities,
    selectIds: selectAllIds,
    selectTotal: selectIdsAndEntities
} = usersAdapter.getSelectors((state) => state.users.users);

export const {addUser, deleteUser, updateUser} = userSlice.actions;
export default userSlice.reducer;