import React, { useCallback } from 'react';
import './Feed.scss';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GET_ALL_POSTS } from '../../redux/constants';
import PostList from './PostList';
import CreatePost from './CreatePost';
import UpToTop from './UpToTop';

const Feed = () => {
    const dispatch = useDispatch();

    const getAllPosts = useCallback(async () => {
        try {
            const option = {
                method: 'get',
                url: '/post/',
            };

            const response = await axios(option);

            const posts = response.data.data.posts;

            dispatch({ type: GET_ALL_POSTS, payload: posts });
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        getAllPosts();
    }, [getAllPosts]);

    return (
        <div className="hvdFeed">
            <div className="feedWrapper">
                <UpToTop />
                <CreatePost />
                <PostList />
            </div>
        </div>
    );
};

export default Feed;
