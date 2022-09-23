import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useFetchUser = () => {
    const [user, setUser] = useState({});
    const username = useParams().username;

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?username=${username}`);
            setUser(res.data);
        };
        fetchUser();
    }, [username]);

    return user
}

export default useFetchUser