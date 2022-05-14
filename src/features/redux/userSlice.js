import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const adapterizer = () => {
    return {
        selecIds: (user) => user.id,
        
        //sortComparer: (preUser, nextUser) => preUser.id.localCompare(nextUser.id),
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
            addUser : (state, action) =>  {
                usersAdapter.addOne(state.users, action.payload)
            },
            deleteUser: (state, action) => {
                usersAdapter.removeOne(state.users, action.payload.id)
            },
            updateUser: (state, action) => {
                usersAdapter.updateOne(state.users ,action.payload)
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