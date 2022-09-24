import React from 'react';
import './Feed.scss';
import { CreatePost, Posts, UpToTop } from '../';
import useFetchPost from '../../hooks/useFetchPost';

const Feed = () => {
    const posts = useFetchPost();

    return (
        <div className="hvdFeed">
            <div className="feedWrapper">
                <UpToTop />
                <CreatePost />
                {posts.map((post) => (
                    <Posts key={post._id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Feed;
