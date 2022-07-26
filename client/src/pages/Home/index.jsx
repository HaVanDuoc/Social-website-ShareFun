import React from "react";
import "./Home.scss";
import { Feed, Rightbar } from "../../components/";

const Home = () => {
    return (
        <div id="hvdHomePage">
            <Feed />
            <Rightbar />
        </div>
    );
};

export default Home;
