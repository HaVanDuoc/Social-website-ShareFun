import { LoginLayout } from "../Layouts/";
import { Friends, Home, Login, Profile } from "../pages";
import NewPost from "../pages/NewPost";

// Public Routes
const publicRoutes = [
    { path: "/", page: Home },
    { path: "/home", page: Home },
    { path: "/friends", page: Friends },
    { path: "/profile/:username", page: Profile },
    { path: "/login", page: Login, layout: LoginLayout },
    { path: "/newPost", page: NewPost }
];

export { publicRoutes };
