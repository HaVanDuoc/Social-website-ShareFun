import { LoginLayout } from "../Layouts/";
import { Friends, Home, Login, Profile } from "../pages";
import Image from "../pages/NewPost/Image";
import Post from "../pages/NewPost/Post";
import Video from "../pages/NewPost/Video";

// Public Routes
const publicRoutes = [

    // root
    { path: "/", page: Home },
    { path: "/home", page: Home },
    { path: "/friends", page: Friends },
    { path: "/profile/:username", page: Profile },
    { path: "/login", page: Login, layout: LoginLayout },

    // Post
    { path: "/newPost/post", page: Post },
    { path: "/newPost/image", page: Image },
    { path: "/newPost/video", page: Video },

];

export { publicRoutes };
