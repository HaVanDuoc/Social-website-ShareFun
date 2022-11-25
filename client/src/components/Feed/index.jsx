import React from 'react';
import './Feed.scss';
import { CreatePost, Posts, UpToTop } from '../';
import useFetchPost from '../../hooks/useFetchPost';
import { useSelector } from 'react-redux';
import { selectorCurrentUser } from '../../redux/reducers/AuthReducer';

const Feed = () => {
    const posts = useFetchPost();
    const currentUser = useSelector(selectorCurrentUser)

    // console.log(currentUser);

    return (
        <div className="hvdFeed">
            {/* {console.log(currentUser)} */}
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
