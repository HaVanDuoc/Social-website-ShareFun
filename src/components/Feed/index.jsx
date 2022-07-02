import React from "react";
import "./Feed.scss";
import CreatePost from "../CreatePost";

const Feed = () => {
    return (
        <div className="hvdFeed">
            <div className="feedWrapper">
                <CreatePost />
            </div>
        </div>
    );
};

export default Feed;
