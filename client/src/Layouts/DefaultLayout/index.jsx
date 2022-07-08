import { Fragment } from "react";
import "./DefaultLayout.scss";
import { Sidebar, Topbar } from "../../components";

const DefaultLayout = ({ children }) => {
    return (
        <Fragment>
            <Topbar />
            <div className="layoutContentPage">
                <div className="subPage">
                    <Sidebar />
                </div>
                <div className="mainPage">{children}</div>
            </div>
        </Fragment>
    );
};

export default DefaultLayout;
