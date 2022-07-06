import React from "react";
import "./Feed.scss";
import { CreatePost, Post } from "../";

// Data
import { PostData } from "./Data.js";

const Feed = () => {
    return (
        <div className="hvdFeed">
            <div className="feedWrapper">
                <CreatePost />
                {PostData.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Feed;
