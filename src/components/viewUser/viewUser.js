import React from "react"
import FlatButton from 'material-ui/FlatButton'

import "./viewUser.css"

const ViewUser = ({activeUser, view, viewUserClose}) => {
    const styles = {
        transform : view?"scale(1)":"scale(0)"
    }
    return <div className="viewUserContainer" style={styles}>
        <div className="viewUserWrapper">
            <div>
                First Name :{activeUser.firstName}
            </div>
            <div>
                Last Name :{activeUser.lastName}
            </div>
            <div>
                Email :{activeUser.email}
            </div>
            
            <FlatButton onClick={viewUserClose()} label="close" secondary={true} />
        </div>
    </div>
}

export default ViewUser