import { GET_ALL_POSTS } from "../constants"

const POST_INITIAL_STATE = {
    post: null,
}

const PostReducer = (state = POST_INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_POSTS:
            return {
                post: action.payload
            }

        default:
            return state
    }
}

export default PostReducer

export const selectorGetAllPosts = state => state.Post.post