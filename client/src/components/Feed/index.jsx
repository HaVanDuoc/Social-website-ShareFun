import React, { useEffect, useState } from "react";
import "./Feed.scss";
import { CreatePost, Posts, UpToTop } from "../";
import axios from "axios";

// Data
import { PostData } from "./Data.js";

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(
                "posts/timeline/62e63d76aad5c221f58f7f56"
            );
            setPosts(res.data);
        };
        fetchPosts();
    }, []);

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
