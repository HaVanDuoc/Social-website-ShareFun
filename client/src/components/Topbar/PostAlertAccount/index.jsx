import React from 'react';
import { TopBarRightItems } from './TopBarRightItems';
import Tippy from '@tippyjs/react';
import AccountUser from './AccountUser';

const PostAlertAccount = () => {
    return (
        <React.Fragment>
            {TopBarRightItems.map((item, index) => (
                <Tippy content={item.tippyContent} key={index}>
                    <div className="wrapperItem">
                        <div
                            className="badgeItem"
                            style={item.badgeContent === 0 ? { display: 'none' } : { display: 'flex' }}
                        >
                            {item.badgeContent}
                        </div>
                        {item.icon}
                    </div>
                </Tippy>
            ))}

            <div className="accountIcon">
                <AccountUser />
            </div>
        </React.Fragment>
    );
};

export default PostAlertAccount;
