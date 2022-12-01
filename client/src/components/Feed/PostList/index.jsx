import React from 'react';
import { useSelector } from 'react-redux';
import { selectorCurrentUser } from '../../../redux/reducers/AuthReducer';
import { selectorGetAllPosts } from '../../../redux/reducers/PostReducer';
import PostItem from './PostItem';

const PostList = () => {
    const currentUser = useSelector(selectorCurrentUser);
    // console.log('currentUser: ', currentUser);
    const allPosts = useSelector(selectorGetAllPosts);

    // console.log(allPosts);

    const newPost = allPosts?.map((post) => {

        // console.log(post)
        
        // Add field data to newPost
        post = { ...post, username: post.author?.username, avatar: post.author?.avatar };

        if (currentUser) {
            return post.author?._id === currentUser.user?._id
                ? { ...post, isFollow: false }
                : { ...post, isFollow: true };
        } else {
            return { ...post, isFollow: false };
        }
    });

    console.log('newPost', newPost);

    return (
        <div className="hvdPosts">
            <div className="postWrapper">
                {newPost?.map((post) => (
                    <PostItem key={post._id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default PostList;
