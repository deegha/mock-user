import * as actions from "../actions/notificationActions"

const initialState = {
    notificationType : "",
    message : "",
    show : false
}

const notificationReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.CREATE_NOTIFICATION : 
            return {
                ...state,
                notificationType : action.notificationType,
                message : action.message,
                show : true
            }
        case actions.CLEAR_NOTIFICATION : 
            return {
                ...state,
                ...initialState
            }
        default : 
            return state
    }
} 

export default notificationReducer