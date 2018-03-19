import * as actions  from "../actions/userActions" 

const initialState = {
    loading:false,
    editing : false,
    viewUser : false,
    user : {
        firstName : "",
        lastName : "",
        email : ""
    }
}

const userReducer = (state = initialState, action) => { 
    switch (action.type) { 
        case actions.USER_REQUEST : 
            return {...state,loading : true}

        case actions.USER_REQUEST_CLEAR :
            return {...state,loading : false}
        
        case actions.EDIT_USER_SUCCESS :
            return {...state, loading : false, user : action.selectedUser, editing:true}
        
        case action.UPDATE_USER_SUCESS : 
            return state
         
        case actions.UPDATE_ACTIVE :     
            return {
                ...state,
                user : {
                    ...state.user,
                    [action.field] : action.value
                }
            }
        case actions.VIEW_USER_OPEN : 
            return {
                ...state,
                viewUser : true
            }
        case actions.VIEW_USER_CLOSE : 
            return {
                ...state,
                viewUser : false,
                user: {
                    ...initialState.user
                }
            }
        case actions.ADD_NEW_USER_FORM : 
            return {
                ...state,
                editing : false,
                user : {
                    ...initialState.user
                }
            }
        case actions.VIEW_USER_SUCCESS :
            return {
                ...state,
                user : action.user
            }
        default :
            return state
    }
}

export default userReducer