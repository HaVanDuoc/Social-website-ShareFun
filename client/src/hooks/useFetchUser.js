import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useFetchUser = () => {
    const [user, setUser] = useState({});
    const username = useParams().username;

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const fetchUser = async () => {
            const res = await axios.get(`/users?username=${username}`, {
                signal: controller.signal
            });
            isMounted && setUser(res.data)
        };

        fetchUser();

        return () => {
            isMounted = false
            controller.abort()
        }

    }, []);

    return user
}

export default useFetchUser