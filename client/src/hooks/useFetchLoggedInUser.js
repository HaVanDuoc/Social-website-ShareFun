import { useEffect, useState } from 'react'

function useFetchLoggedInUser() {
    const [user, setUser] = useState({});

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
    }, []);

    return user
}

export default useFetchLoggedInUser