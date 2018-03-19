import * as actions from "../actions/listActions"

const initialState = {
    users : [
        {
            "firstName": "",
            "email": "",
            "lastName": ""
        }
    ],
    loading : false,
}

const listReducer = (state=initialState, action) => {
    switch (action.type) {
        case actions.LIST_USERS_REQUEST :
            return {...state, loading : true}

        case actions.LIST_USERS_SUCESS : 
            return {...state, users : action.usersList, loading : false} 
    default :
        return state
    }
}

export default listReducer