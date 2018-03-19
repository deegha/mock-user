import React from "react"
import { connect } from "react-redux"

import "./notification.css"

export const Notification = ({notificationType, message, show}) => {
    const styles = {
        visibility : show?"visible":"hidden",
        opacity :show?"1":"0",
        color : (notificationType === "error")?"#e74c3c":"#2ecc71"
    }
    return (
        <div className="notificationComponent" style={styles}>
            <p className={notificationType}>{message}</p>
        </div>
    )
}

export const mapStateToProps = ({notifications}) => ({
    notificationType : notifications.notificationType,
    message : notifications.message,
    show : notifications.show
})

export default connect(mapStateToProps)(Notification)