import React from 'react'
import { followAC, setUsersAC, unFollowAC } from '../../redux/usersReducer'
import { connect } from 'react-redux'
import Users from './Users'

const mapStateToProps = (state) => {
    return {
        users: state.userPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(Users)