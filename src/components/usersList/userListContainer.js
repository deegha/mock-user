import { connect } from "react-redux"

import { editUser, addUserForm, viewUser } from "../../actions/userActions" 
import UsersList from "./usersList"

const mapStateToProps = ({ usersList, activeUser }) => ({
    usersList,
    editing : activeUser.editing
})

const mapDispatchToProps = (dispatch) => ({
    editUser : id => event => dispatch(editUser(id)),
    addUserForm : () => event => dispatch(addUserForm()),
    viewUser : (id) => event => dispatch(viewUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);