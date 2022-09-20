import { Box, Button, Checkbox, FormHelperText, Link, TextField, Typography } from '@mui/material';
import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useDispatch } from 'react-redux';
import { FormLogin } from '../../redux/actions/SignInOutAction';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

function FormRegister() {
    const dispatch = useDispatch();

    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        eula: false,
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('*Định dạng email sai').required('*Không được để trống email'),
        password: Yup.string()
            .min(8, '*Mật khẩu tối thiểu 8 ký tự (không thể toàn chữ hoặc số)')
            .max(30, '*Mật khẩu tối đa 30 ký tự (không thể toàn chữ hoặc số)')
            .required('*Mật khẩu không được để trống'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], '*Mật khẩu không trùng khớp')
            .required('*Vui lòng xác nhận mật khẩu'),
        eula: Yup.string().oneOf(['true'], '*Bạn có chấp nhận Điều khoản dịch vụ & Chính Sách Về Quyền Riêng Tư'),
    });

    const onSubmit = (values, props) => {
        setTimeout(() => {
            props.resetForm();
            props.setSubmitting(false);
            console.log('values', values);
        }, 2000);
    };

    const style = {
        '.MuiFormHelperText-root': {
            color: 'red',
            fontSize: 13,
        },
    };

    return (
        <React.Fragment>
            <Box sx={style}>
                <Box textAlign="center" margin="10px 0">
                    <Typography fontSize="25px" sx={{ pointerEvents: 'none' }}>
                        Đăng ký
                    </Typography>
                </Box>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            <Field
                                as={TextField}
                                label="Email"
                                type="email"
                                name="email"
                                fullWidth
                                helperText={<ErrorMessage name="email" />}
                                sx={{ margin: '10px 0' }}
                            />
                            <Field
                                as={TextField}
                                label="Mật khẩu 8-30 ký tự (không thể toàn chữ hoặc số)"
                                type="password"
                                name="password"
                                fullWidth
                                helperText={<ErrorMessage name="password" />}
                                sx={{ margin: '10px 0' }}
                            />
                            <Field
                                as={TextField}
                                label="Xác Nhận Mật Khẩu"
                                type="password"
                                name="confirmPassword"
                                fullWidth
                                helperText={<ErrorMessage name="confirmPassword" />}
                                sx={{ margin: '10px 0' }}
                            />
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    margin: '10px 0',
                                    fontSize: 13,
                                    color: 'lightgray',
                                    '& .MuiSvgIcon-root': { fontSize: 15 },
                                    '& .MuiLink-root': { textDecoration: 'none' },
                                }}
                            >
                                <Field as={Checkbox} name="eula" />
                                <Box component="span">
                                    Đã đọc và đồng ý <Link href="#">Điều khoản dịch vụ</Link> &{' '}
                                    <Link href="#">Chính Sách Về Quyền Riêng Tư</Link>
                                </Box>
                            </Box>
                            <FormHelperText>
                                <ErrorMessage name="eula" />
                            </FormHelperText>
                            <Field
                                as={Button}
                                type="submit"
                                variant="contained"
                                size="large"
                                fullWidth
                                disabled={props.isSubmitting}
                                sx={{ margin: '10px 0' }}
                            >
                                {props.isSubmitting ? 'Đang tải...' : 'Đăng ký'}
                            </Field>
                        </Form>
                    )}
                </Formik>
                <Box align="center" marginTop="30px">
                    <Button
                        fontSize="18px"
                        onClick={() => dispatch(FormLogin())}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            '& .MuiSvgIcon-root': { fontSize: 17 },
                        }}
                    >
                        <Typography>Quay lại đăng nhập</Typography>
                        <ArrowForwardIosIcon />
                    </Button>
                </Box>
            </Box>
        </React.Fragment>
    );
}

export default FormRegister;
