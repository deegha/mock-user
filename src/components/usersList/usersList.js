import React from "react"

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table'

import { FlatButton } from 'material-ui'
import CircularProgress from 'material-ui/CircularProgress';

const UsersList = ({usersList, editUser, editing, addUserForm, viewUser}) => 
usersList.loading?<CircularProgress style={{marginLeft:"300px"}} size={80} thickness={5} />:
    <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false} >
        <TableRow>
            <TableHeaderColumn>First Name</TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
            <TableHeaderColumn>
            {editing?
            <FlatButton primary={true} label="add new User" onClick={addUserForm()} />
            :""} 
            </TableHeaderColumn>
        </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false} >
        {usersList.users.map(user => 
            <TableRow key={user.email} >
                <TableRowColumn>{user.firstName}</TableRowColumn>
                <TableRowColumn >
                    <FlatButton onClick={editUser(user.email)}  label="Edit" secondary={true} />
                    <FlatButton onClick={viewUser(user.email)} label="view" primary={true} />
                    <FlatButton label="delete" default={true} />
                </TableRowColumn>
            </TableRow>
        )} 
        </TableBody>
    </Table>

export default UsersList
