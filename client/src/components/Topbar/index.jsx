import React, { Fragment } from "react";
import "./Topbar.scss";

// Components
// import { Avatar } from "../../components";

// Tippy Library
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

// Icons
import SearchIcon from "@mui/icons-material/Search";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Link } from "react-router-dom";

// Material
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import { useContext } from "react";

import AuthContext from '../../store/AuthContext'

const TopBarRightItems = [
    {
        tippyContent: "Messenger",
        badgeContent: 0,
        icon: <ChatBubbleOutlineIcon />,
    },
    {
        tippyContent: "Lời mời kết bạn",
        badgeContent: 1,
        icon: <PersonAddIcon />,
    },
    {
        tippyContent: "Thông báo",
        badgeContent: 3,
        icon: <NotificationsNoneIcon />,
    },
];

const AccountUser = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [state] = useContext(AuthContext)
    const { user } = state
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <Fragment>
            {user ? (
                // Logged
                <Fragment>
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                        <Tooltip title="Đăng nhập">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <Avatar sx={{ width: 40, height: 40 }}></Avatar>
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem>
                            <Avatar /> Profile
                        </MenuItem>
                        <MenuItem>
                            <Avatar /> My account
                        </MenuItem>
                        <Divider />
                        <MenuItem>
                            <ListItemIcon>
                                <PersonAdd fontSize="small" />
                            </ListItemIcon>
                            Add another account
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <Settings fontSize="small" />
                            </ListItemIcon>
                            Settings
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>
                </Fragment>
            ) : (
                // Not logged in yet
                <Fragment>
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                        <Tooltip title="Đăng nhập">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <Avatar src={user ? user.avatar : `${PF}images/noUser.png`} sx={{ width: 40, height: 40 }} />
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem>
                            <ListItemIcon>
                                <LoginIcon fontSize="small" />
                            </ListItemIcon>
                            Đăng nhập
                        </MenuItem>
                    </Menu>
                </Fragment>
            )}
        </Fragment>
    )
}

const Topbar = () => {

    return (
        <div className="hvdTopBar">
            <div className="topbarContainer">
                <div className="topbarLeft">
                    <Link to="/">
                        <div className="logo">HaVanDuoc</div>
                    </Link>
                </div>

                <div className="topbarCenter">
                    <div className="topbarSearch">
                        <div className="topbarSearchBtn wrapperIcon">
                            <SearchIcon />
                        </div>
                        <input
                            className="topbarSearchInput"
                            type="text"
                            placeholder="Tìm kiếm"
                        />
                    </div>
                </div>

                <div className="topbarRight">
                    {TopBarRightItems.map((item, index) => (
                        <Tippy content={item.tippyContent} key={index}>
                            <div className="wrapperItem">
                                <div
                                    className="badgeItem"
                                    style={
                                        item.badgeContent === 0
                                            ? { display: "none" }
                                            : { display: "flex" }
                                    }
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
                </div>
            </div>
        </div>
    );
};

export default Topbar;
