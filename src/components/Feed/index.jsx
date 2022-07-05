import React from "react";
import "./Feed.scss";
import { CreatePost, Post } from "../";

const Feed = () => {
    return (
        <div className="hvdFeed">
            <div className="feedWrapper">
                <CreatePost />

                <Post />
            </div>
        </div>
    );
};

export default Feed;
