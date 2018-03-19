import { connect } from "react-redux"

import { viewUserClose } from "../../actions/userActions"
import ViewUser from "./viewUser"
 
const mapStateToProps = ({activeUser}) => ({
    activeUser : activeUser.user,
    view : activeUser.viewUser
})

const mapDispatchToProps = (dispatch) => ({
    viewUserClose : () => event => dispatch(viewUserClose()),
})
    
export default connect(mapStateToProps,mapDispatchToProps)(ViewUser)