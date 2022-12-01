import { GET_ALL_POSTS } from "../constants"

export const GetAllPosts = (post) => ({
    type: GET_ALL_POSTS,
    payload: post,
})