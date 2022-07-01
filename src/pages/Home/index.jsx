import React, { Fragment } from "react";
import { Feed, Rightbar, Sidebar, Topbar } from "../../components/";

const Home = () => {
    return (
        <Fragment>
            <Topbar />
            <div className="layoutContentPage">
                <Sidebar />
                <div className="contentPage">
                    <div className="mainPage">
                        <Feed />
                    </div>
                    <div className="subPage">
                        <Rightbar />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Home;
