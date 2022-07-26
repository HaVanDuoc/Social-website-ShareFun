import React from "react";
import "./Feed.scss";
import { CreatePost, Posts, UpToTop } from "../";

// Data
import { PostData } from "./Data.js";

const Feed = () => {
    return (
        <div className="hvdFeed">
            <div className="feedWrapper">
                <UpToTop />
                <CreatePost />
                {PostData.map((post) => (
                    <Posts key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Feed;
