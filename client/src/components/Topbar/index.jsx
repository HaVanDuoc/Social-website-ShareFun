import React from 'react';
import './TopBar.scss';
import 'tippy.js/dist/tippy.css'; // optional
import Logo from './Logo';
import SearchBar from './SearchBar';
import PostAlertAccount from './PostAlertAccount';

const TopBar = () => {
    return (
        <div className="hvdTopBar">
            <div className="topBarContainer">
                <div className="topBarLeft">
                    <Logo />
                </div>

                <div className="topBarCenter">
                    <SearchBar />
                </div>

                <div className="topBarRight">
                    <PostAlertAccount />
                </div>
            </div>
        </div>
    );
};

export default TopBar;
