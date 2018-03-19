import React from "react"

import UsersList from "../usersList/userListContainer"
import UserForm from "../userForm/userForm"
import Notification from  "../notification/notification"
import ViewUser from "../viewUser/viewUserContainer"

import "./layout.css"

const Layout = () => <div className="container">
    <Notification/>
    <ViewUser/>
    <div className="wrapper">
        <div className="usersList">
            <UsersList/>
        </div>
        <div className="userFormContainer">
            <UserForm/>
        </div>
    </div>
</div>

export default Layout