import { Box, Button, Link, TextField, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedSignInOut } from '../../redux/reducers/SignInOutReducer';
import { FormRegister as FormRegisterAction } from '../../redux/actions/SignInOutAction.js';

function FormLogin() {
    const dispatch = useDispatch();
    const form = useSelector(selectedSignInOut);

    const handleSignUpNow = () => {
        dispatch(FormRegisterAction());
        console.log(form);
    };

    return (
        <React.Fragment>
            <Box component="form">
                <Box textAlign="center" margin="10px 0">
                    <Typography fontSize="25px" sx={{ pointerEvents: 'none' }}>
                        Đăng nhập
                    </Typography>
                </Box>
                <TextField label="Tên đăng nhập/Email" type="text" fullWidth sx={{ margin: '10px 0' }} />
                <TextField label="Mật khẩu" type="password" fullWidth sx={{ margin: '10px 0' }} />
                <Button type="submit" variant="contained" fullWidth size="large" sx={{ margin: '10px 0' }}>
                    Đăng nhập
                </Button>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    margin: '10px 0',
                }}
            >
                <Link href="#" underline="none" onClick={(e) => e.preventDefault()}>
                    Gặp khó khăn
                </Link>
                <Link href="#" underline="none" onClick={handleSignUpNow}>
                    Đăng ký ngay
                </Link>
            </Box>
        </React.Fragment>
    );
}

export default FormLogin;
