import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, Link, TextField, Typography } from '@mui/material';
import { FormRegister as FormRegisterAction } from '../../../redux/actions/SignInOutAction.js';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router';

function FormLogin() {
    const dispatch = useDispatch();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSignUpNow = () => {
        dispatch(FormRegisterAction());
    };

    const onSubmit = async (e) => {
        try {
            e.preventDefault();

            const option = {
                method: 'post',
                url: '/auth/login',
                data: user,
            };

            const response = await axios(option);
            // console.log(response.data.data);
            const { token, userId, message } = response.data.data;

            // Save data to localStorage
            localStorage.setItem('token', token);

            dispatch({ type: 'CURRENT_USER', payload: { userId } });

            setTimeout(() => {
                setError('');
                setSuccess(message);
            }, 1500);

            setTimeout(() => window.location.reload(), 1500)
            
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
            }
        }
    };

    return (
        <React.Fragment>
            <Box
                sx={{
                    '.MuiFormHelperText-root': {
                        color: 'red',
                        fontSize: 15,
                    },
                }}
            >
                <Box textAlign="center" margin="10px 0">
                    <Typography fontSize="25px" sx={{ pointerEvents: 'none' }}>
                        Đăng nhập
                    </Typography>
                </Box>
                <form onSubmit={onSubmit}>
                    <TextField
                        label="Tên đăng nhập/Email"
                        id="email"
                        name="username"
                        type="text"
                        fullWidth
                        required
                        sx={{ margin: '10px 0' }}
                        value={user.email}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Mật khẩu"
                        id="password"
                        name="password"
                        type="password"
                        fullWidth
                        required
                        sx={{ margin: '10px 0' }}
                        value={user.password}
                        onChange={handleChange}
                    />
                    {error && <Alert severity="error">{error}</Alert>}
                    {success && <Alert severity="success">{success}</Alert>}
                    <Button type="submit" variant="contained" fullWidth size="large" sx={{ margin: '10px 0' }}>
                        Đăng nhập
                    </Button>
                </form>
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
