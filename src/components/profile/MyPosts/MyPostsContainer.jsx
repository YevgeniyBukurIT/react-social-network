import React from 'react'
import { addPostActionCreator, updateNewPostChangeActionCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'
import storeContext from '../../../storeContext'


const MyPostsContainer = (props) => {

    return <storeContext.Consumer>
        {
            (store) => {
                // let state = props.store.getState()

                let addPost = () => {
                    store.dispatch(addPostActionCreator())

                }

                let onPostChange = (text) => {
                    let action = updateNewPostChangeActionCreator(text)
                    store.dispatch(action)

                }

                return <MyPosts updateNewPostText={onPostChange}
                                addPost={addPost}
                                dialogsData={store.getState().profilePage.dialogsData}
                                newPostText={store.getState().profilePage.newPostText}/>
            }
        }
    </storeContext.Consumer>


}

export default MyPostsContainer