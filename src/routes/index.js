import { ProfileLayout } from "../Layouts";
import { Friends, Home, Profile } from "../pages";

// Public Routes
const publicRoutes = [
    { path: "/", page: Home },
    { path: "/home", page: Home },
    { path: "/friends", page: Friends },
    { path: "/profile", page: Profile },
];

export { publicRoutes };
