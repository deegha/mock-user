/**
 * Action Constants
*/

export const CREATE_NOTIFICATION = "CREATE_NOTIFICATION"
export const CLEAR_NOTIFICATION = "CLEAR_NOTIFICATION"

/**
 * Action Creators
*/

export const generateNotification = (notificationType, message) => ({
    type : CREATE_NOTIFICATION,
    notificationType,
    message
})

export const createNotification = (notificationType, message) => (dipatch)=> {
    dipatch(generateNotification(notificationType, message))
    setTimeout(() => dipatch(clearNotification()) , 1800);
}

export const clearNotification = () => ({
    type : CLEAR_NOTIFICATION
})