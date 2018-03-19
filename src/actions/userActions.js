import { getUsersList } from "./listActions"
import { setFormValidity, clearAllValidation } from "./errorActions"
import { createNotification } from "./notificationActions"  
import { addNewUser, updateUserCall, deleteCall } from "../services/backendClient"

/*
* Action constants
*/

export const USER_REQUEST = "USER_REQUEST"
export const USER_REQUEST_CLEAR = "USER_REQUEST_CLEAR"
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS"
export const UPDATE_USER_SUCESS = "UPDATE_USER_SUCESS"
export const UPDATE_ACTIVE = "UPDATE_ACTIVE"
export const ADD_NEW_USER_FORM = "ADD_NEW_USER_FORM"
export const VIEW_USER_OPEN="VIEW_USER_OPEN"
export const VIEW_USER_CLOSE="VIEW_USER_CLOSE"
export const VIEW_USER_SUCCESS = "VIEW_USER_SUCCESS"

/*
* Action creators
*/

export const userRequest = () => ({
    type : USER_REQUEST
})

export const clearUserRequest = () => ({
    type : USER_REQUEST_CLEAR
})

export const editUserSuccess = selectedUser => ({
    type : EDIT_USER_SUCCESS,
    selectedUser
})

export const editUser = (id) => (dispatch, getState) => {
    dispatch(setFormValidity(false))
    const { users } = getState().usersList
    /**
     * I had to get the single user from the list since the api does not have
     * an id in the users list. so couldnt do a async call here.. but i think its better this way
     * so you call the api only once to get the data, but not sure.
    */
    const selecteduser = users.filter(user => user.email === id)
    dispatch(editUserSuccess(selecteduser[0]))
    dispatch(clearAllValidation())
} 

export const updateSuccess = () => dispatch => { 
    dispatch(getUsersList)
    return {
        type : UPDATE_USER_SUCESS
    }
}

export const updateActive = (field, value) => ({
    type: UPDATE_ACTIVE,
    field,
    value
})

export const addUser = () => (dispatch, getState) => {
    const {user} = getState().activeUser
    dispatch(userRequest())
    addNewUser(user).then(response => {
        dispatch(clearUserRequest())
        dispatch(createNotification("success", "New user created successfully"))
    }).catch(error => dispatch(createNotification("error", error.code)))
} 

export const updateUser = () => (dispatch, getState) => {
    const {user} = getState().activeUser
    dispatch(userRequest())
    /**
     * I have no idea why the auth fail, auth works for add user and list users, but not this :/
    */
    updateUserCall(user).then(response => {
        dispatch(clearUserRequest())
        dispatch(createNotification("success", "User updated successfully"))})
        .catch(error => dispatch(createNotification("error", error.code)))
}

export const addUserFormSuccess = () => ({
    type : ADD_NEW_USER_FORM
})

export const addUserForm = () => dispatch => {  
    dispatch(setFormValidity(true))
    dispatch(addUserFormSuccess())
    dispatch(clearAllValidation())
} 

export const viewUserOpen = () => ({
    type : VIEW_USER_OPEN
}) 

export const viewUserClose = () => ({
    type : VIEW_USER_CLOSE
}) 


export const viewUserSuccess = (user) => ({
    type : VIEW_USER_SUCCESS,
    user
}) 

export const viewUser = (id) => (dispatch, getState) => {
    dispatch(userRequest())
    const { users } = getState().usersList
    const selecteduser = users.filter(user => user.email === id)
    dispatch(viewUserSuccess(selecteduser[0]))
    dispatch(viewUserOpen())
    dispatch(clearAllValidation())
} 

export const deleteUser = (id) => (dispatch, getState) => {
    dispatch(userRequest())
    deleteCall(id).then(res=> dispatch(createNotification("success", "User deleted successfully")))
    .catch(error => dispatch(createNotification("error", error)))
}
