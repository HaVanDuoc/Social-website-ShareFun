import React, { useState } from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik, setIn } from 'formik';
import { Box, Button, Link, TextField, Typography } from '@mui/material';
import { FormRegister as FormRegisterAction } from '../../../redux/actions/SignInOutAction.js';
import axios from 'axios';
import Alert from '@mui/material/Alert';

function FormLogin() {
    const dispatch = useDispatch();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const initialValues = {
        username: '',
        password: '',
    };

    const handleSignUpNow = () => {
        dispatch(FormRegisterAction());
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().email('*Định dạng email sai').required('*Không được để trống email').default(user.email),
        password: Yup.string().required('*Mật khẩu không được để trống').default(user.password),
    });

    const onSubmit = async () => {
        try {
            const url = '/auth/login';
            const res = await axios.post(url, user);
            const message = res.data.message;

            if (message === 'Đăng nhập thành công!') {
                const token = JSON.stringify(res.data);
                localStorage.setItem('token', token);
                localStorage.setItem('isLogged', true);
                setError('');
                setSuccess(message);
                setTimeout(() => window.location.reload(), 1500);
            } else {
                setError(message);
                setSuccess('');
            }
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
            } else {
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
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            <Field
                                as={TextField}
                                label="Tên đăng nhập/Email"
                                name="email"
                                type="text"
                                fullWidth
                                required
                                helperText={<ErrorMessage name="email" />}
                                sx={{ margin: '10px 0' }}
                                value={user.email}
                                onChange={handleChange}
                            />
                            <Field
                                as={TextField}
                                label="Mật khẩu"
                                name="password"
                                type="password"
                                fullWidth
                                required
                                helperText={<ErrorMessage name="password" />}
                                sx={{ margin: '10px 0' }}
                                value={user.password}
                                onChange={handleChange}
                            />
                            {error && <Alert severity="error">{error}</Alert>}
                            {success && <Alert severity="success">{success}</Alert>}
                            <Field
                                as={Button}
                                type="submit"
                                variant="contained"
                                fullWidth
                                size="large"
                                disabled={props.isSubmitting}
                                sx={{ margin: '10px 0' }}
                            >
                                {props.isSubmitting ? 'Đang tải...' : 'Đăng nhập'}
                            </Field>
                        </Form>
                    )}
                </Formik>
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
