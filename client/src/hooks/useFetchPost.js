import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const useFetchPost = () => {
    const [posts, setPosts] = useState([])
    const username = useParams().username;

    useEffect(() => {
        const fetchPosts = async () => {
            const res = username
                ? await axios.get("/posts/profile/" + username)
                : await axios.get("/posts/timeline/6309be9011d459c2775a7501");
            setPosts(res.data);
        };
        fetchPosts();
    }, [username]);

    return posts
}

export default useFetchPost