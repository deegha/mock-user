import React from "react"

import {TextField, RaisedButton} from 'material-ui';

import "./userForm.css"

const UserFormView = ({activeUser, editing,updateUser, addUser, validation, update, notifications, viewUser}) => {
            const buttonDisabled = !Object.values(activeUser).reduce((acc, value) => acc && value) 
          
            return (
            <div className="userForm">
            <h1>{editing?"Edit user":"Add user"}</h1>
            <TextField
              floatingLabelText="First Name"
              value={activeUser.firstName}
              onChange={update("firstName")}
              fullWidth={true}
              errorText={validation.firstName}
            />
            <TextField
              floatingLabelText="Last Name"
              onChange={update("lastName")}
              value={activeUser.lastName}
              fullWidth={true}
              errorText={validation.lastName}
            />
            <TextField
              errorText={validation.email}
              floatingLabelText="Email"
              onChange={update("email")}
              value={activeUser.email}
              fullWidth={true}
            />
              
            {editing?
            <RaisedButton className="submitBtn" 
              disabled={buttonDisabled} 
              onClick={updateUser()} 
              label="Update User" 
              secondary={true}  />:
            <RaisedButton className="submitBtn" 
              disabled={buttonDisabled} 
              onClick={addUser()} 
              label="Add User" 
              primary={true}  />}
        </div>)
          }


export default UserFormView
