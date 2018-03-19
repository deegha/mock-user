import { getUserList } from "../services/backendClient"

/** 
 * Actions constants
*/
export const LIST_USERS_REQUEST = "LIST_USERS_REQUEST"
export const LIST_USERS_SUCESS = "LIST_USERS_SUCESS"

 /**
  * Action creators 
 */

 export const listUsersRequest = () => ({
    type : LIST_USERS_REQUEST
 })

 export const listUsersSucess = (usersList) => ({
    type : LIST_USERS_SUCESS,
    usersList
 })
     
 export const getUsersList = () => (dispatch) =>{
    dispatch(listUsersRequest())
    getUserList().then(users => {
        dispatch(listUsersSucess(users.data.mockUsers.data))
    })
 } 
