import { Box, Button, Link, TextField, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { FormRegister as FormRegisterAction } from '../../redux/actions/SignInOutAction.js';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

function FormLogin() {
    const dispatch = useDispatch();
    const initialValues = {
        username: '',
        password: '',
    };

    const handleSignUpNow = () => {
        dispatch(FormRegisterAction());
    };

    const onSubmit = (values, props) => {
        console.log(props);
        props.resetForm();
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().email('*Định dạng email sai').required('*Không được để trống email'),
        password: Yup.string().required('*Mật khẩu không được để trống'),
    });

    return (
        <React.Fragment>
            <Box>
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
                                name="username"
                                type="text"
                                fullWidth
                                required
                                helperText={<ErrorMessage name="username" />}
                                sx={{ margin: '10px 0' }}
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
                            />
                            <Field
                                as={Button}
                                type="submit"
                                variant="contained"
                                fullWidth
                                size="large"
                                sx={{ margin: '10px 0' }}
                            >
                                Đăng nhập
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
