import React, { Fragment } from 'react';
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
import { useNavigate } from 'react-router-dom';
import useFetchLoggedInUser from '../../../hooks/useFetchLoggedInUser';
import { useDispatch } from 'react-redux';
import { FormLogin } from '../../../redux/actions/SignInOutAction';
import { OpenModalLogin } from '../../../redux/actions/ModalAction';
import useCheckLogged from '../../../hooks/useCheckLogged';

const AccountUser = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // fetch data user logged
    const user = useFetchLoggedInUser();
    const isLogged = useCheckLogged();

    // Logged
    const Logged = () => {
        const [anchorEl, setAnchorEl] = React.useState(null);
        const open = Boolean(anchorEl);

        const handleClickLoggedIn = (e) => {
            e.preventDefault();
            setAnchorEl(e.currentTarget);
        };

        // Click button log out
        const handleClickLogOut = (e) => {
            e.preventDefault();
            localStorage.clear();
            window.location.href('/');
        };

        const handleClose = () => {
            setAnchorEl(null);
        };

        // Click button "Trang cá nhân"
        const handleClickProfile = (e) => {
            e.preventDefault();
            let path = 'profile/' + user.username;
            navigate(path);
        };

        return (
            <Fragment>
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <Tooltip title="Đăng nhập">
                        <IconButton
                            onClick={handleClickLoggedIn}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar
                                src={isLogged ? PF + user.avatar : PF + 'images/noUser.png'}
                                sx={{ width: 40, height: 40 }}
                            ></Avatar>
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
                    <MenuItem onClick={handleClickProfile}>
                        <Avatar src={PF + user.avatar} /> Trang cá nhân
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemIcon>
                            <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        Thêm tài khoản
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Cài đặt
                    </MenuItem>
                    <MenuItem onClick={handleClickLogOut}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Đăng xuất
                    </MenuItem>
                </Menu>
            </Fragment>
        );
    };

    // No logged
    const NoLogged = () => {
        const handleClickNoLoggedIn = (e) => {
            e.preventDefault();

            if (!isLogged) {
                dispatch(FormLogin());
                dispatch(OpenModalLogin());
            }
        };

        return (
            <Fragment>
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <Tooltip title="Đăng nhập">
                        <IconButton onClick={handleClickNoLoggedIn} size="small" sx={{ ml: 2 }} aria-haspopup="true">
                            <Avatar sx={{ width: 40, height: 40 }} alt="avatar" src={PF + 'images/noUser.png'} />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Fragment>
        );
    };

    return <Fragment>{isLogged ? <Logged /> : <NoLogged />}</Fragment>;
};

export default AccountUser;
