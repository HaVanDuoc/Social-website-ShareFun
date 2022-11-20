import { LoginLayout } from "../Layouts/";
import OnlyTopBarLayout from "../Layouts/OnlyTopBarLayout";
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
    { path: "/newPost/post", page: Post, layout: OnlyTopBarLayout },
    { path: "/newPost/image", page: Image, layout: OnlyTopBarLayout },
    { path: "/newPost/video", page: Video, layout: OnlyTopBarLayout },

];

export { publicRoutes };
