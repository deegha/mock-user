import { connect } from "react-redux"

import UserFormView from "./userFormView"
import { isValidEmail } from "../../utilities/validators"

import { updateActive, addUser, updateUser } from "../../actions/userActions"
import { createValidationErrorMessage, clearValidationErrorMessage } from "../../actions/errorActions"

const mapStateToProps = ({ activeUser, errors, notifications }) => ({
    activeUser : activeUser.user,
    editing : activeUser.editing,
    validation : errors.validation,
    notifications : notifications
})

const mapDispatchToProps = (dispatch) => ({
    updateUser : () => event =>  dispatch(updateUser()),
    addUser : ()  => event =>  dispatch(addUser()),
    update: (field) => (event) => {
        (event.target.value === "")?
            dispatch(createValidationErrorMessage(field, "This feild is mandatory")):
            dispatch(clearValidationErrorMessage(field))
        dispatch(updateActive(field, event.target.value))

        if(field === "email" && !isValidEmail(event.target.value)) { 
            dispatch(createValidationErrorMessage(field, "Email validation faild"))
        }
    } ,
})

export default connect(mapStateToProps, mapDispatchToProps)(UserFormView)