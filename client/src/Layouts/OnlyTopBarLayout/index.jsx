import React, { Fragment } from 'react';
import TopBar from '../../components/Topbar';

const OnlyTopBarLayout = ({ children }) => {
    return (
        <Fragment>
            <TopBar />

            {children}
        </Fragment>
    );
};

export default OnlyTopBarLayout;
