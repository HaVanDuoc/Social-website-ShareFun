import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const useFetchPost = () => {
    const [posts, setPosts] = useState([])
    const username = useParams().username;

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get(`/posts/profile/${username}`)
            setPosts(res.data)
        }
        fetchPost();
    }, [username]);

    return posts
}

export default useFetchPost