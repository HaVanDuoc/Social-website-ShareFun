import React, { useEffect, useState } from "react";
import "./Feed.scss";
import { CreatePost, Posts, UpToTop } from "../";
import axios from "axios";

const Feed = ({ username }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = username
                ? await axios.get("/posts/profile/" + username)
                : await axios.get("posts/timeline/6309be9011d459c2775a7501");
            setPosts(res.data);
        };
        fetchPosts();
    }, [username]);

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
