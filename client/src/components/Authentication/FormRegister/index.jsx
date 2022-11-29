import React from 'react';
// import * as Yup from 'yup';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { ErrorMessage, Field, Form, Formik } from 'formik';
import { FormLogin } from '../../../redux/actions/SignInOutAction';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Alert, Box, Button, Checkbox, FormHelperText, Link, TextField, Typography } from '@mui/material';

function FormRegister() {
    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        policy: false,
    };
    const dispatch = useDispatch();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const [userInput, setUserInput] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        policy: true,
    });

    const handleChange = ({ currentTarget: input }) => {
        setUserInput({ ...userInput, [input.name]: input.value });
    };

    const handleBackToFormLogin = () => dispatch(FormLogin());

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const option = {
                method: 'post',
                url: '/auth/register',
                data: userInput,
            };

            const res = await axios(option);
            console.log(res);

            setTimeout(() => {
                setError('');
                setSuccess(res.data.data.message);
            }, 1500);

            setTimeout(() => window.location.reload(), 1500);
            
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
            }
        }
    };

    // const onSubmit = async () => {
    //     try {
    //         const url = '/auth/register';
    //         const res = await axios.post(url, userInput);
    //         const message = res.data.message;

    //         if (message === 'Đăng ký thành công!') {
    //             setSuccess(message);
    //             setTimeout(() => handleBackToFormLogin(), 1500);
    //         } else {
    //             setError(message);
    //         }
    //     } catch (error) {
    //         if (error.response && error.response.status >= 400 && error.response.status <= 500) {
    //         } else {
    //             setError(error.response.data.message);
    //         }
    //     }
    // };

    // const validationSchema = Yup.object().shape({
    //     email: Yup.string()
    //         .email('*Định dạng email sai')
    //         .required('*Không được để trống email')
    //         .default(userInput.email),
    //     password: Yup.string()
    //         .min(8, '*Mật khẩu tối thiểu 8 ký tự (không thể toàn chữ hoặc số)')
    //         .max(30, '*Mật khẩu tối đa 30 ký tự (không thể toàn chữ hoặc số)')
    //         .required('*Mật khẩu không được để trống')
    //         .default(userInput.password),
    //     confirmPassword: Yup.string()
    //         .oneOf([Yup.ref('password')], '*Mật khẩu không trùng khớp')
    //         .required('*Vui lòng xác nhận mật khẩu')
    //         .default(userInput.confirmPassword),
    //     eula: Yup.string().oneOf(['true'], '*Bạn có chấp nhận Điều khoản dịch vụ & Chính Sách Về Quyền Riêng Tư'),
    // });

    const handleChangeChecked = (e) => {
        setUserInput({ policy: e.target.checked });
        console.log(userInput);
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

                <form onSubmit={onSubmit}>
                    <TextField
                        label="Tên đăng nhập/email"
                        type="text"
                        name="username"
                        fullWidth
                        sx={{ margin: '10px 0' }}
                        value={userInput.email}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Mật khẩu 8-30 ký tự (không thể toàn chữ hoặc số)"
                        type="password"
                        name="password"
                        fullWidth
                        sx={{ margin: '10px 0' }}
                        value={userInput.password}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Xác Nhận Mật Khẩu"
                        type="password"
                        name="confirmPassword"
                        fullWidth
                        sx={{ margin: '10px 0' }}
                        value={userInput.confirmPassword}
                        onChange={handleChange}
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
                        <Checkbox name="eula" checked={userInput.policy} onChange={handleChangeChecked} />
                        <Box component="span">
                            Đã đọc và đồng ý <Link href="#">Điều khoản dịch vụ</Link> &{' '}
                            <Link href="#">Chính Sách Về Quyền Riêng Tư</Link>
                        </Box>
                    </Box>
                    {error && <Alert severity="error">{error}</Alert>}
                    {success && <Alert severity="success">{success}</Alert>}
                    <Button type="submit" variant="contained" size="large" fullWidth sx={{ margin: '10px 0' }}>
                        Đăng ký
                    </Button>
                </form>

                <Box align="center" marginTop="30px">
                    <Button
                        fontSize="18px"
                        onClick={handleBackToFormLogin}
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
        // <React.Fragment>
        //     <Box sx={style}>
        //         <Box textAlign="center" margin="10px 0">
        //             <Typography fontSize="25px" sx={{ pointerEvents: 'none' }}>
        //                 Đăng ký
        //             </Typography>
        //         </Box>
        //         <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        //             {(props) => (
        //                 <Form>
        //                     <Field
        //                         as={TextField}
        //                         label="Email"
        //                         type="email"
        //                         name="email"
        //                         fullWidth
        //                         helperText={<ErrorMessage name="email" />}
        //                         sx={{ margin: '10px 0' }}
        //                         value={userInput.email}
        //                         onChange={handleChange}
        //                     />
        //                     <Field
        //                         as={TextField}
        //                         label="Mật khẩu 8-30 ký tự (không thể toàn chữ hoặc số)"
        //                         type="password"
        //                         name="password"
        //                         fullWidth
        //                         helperText={<ErrorMessage name="password" />}
        //                         sx={{ margin: '10px 0' }}
        //                         value={userInput.password}
        //                         onChange={handleChange}
        //                     />
        //                     <Field
        //                         as={TextField}
        //                         label="Xác Nhận Mật Khẩu"
        //                         type="password"
        //                         name="confirmPassword"
        //                         fullWidth
        //                         helperText={<ErrorMessage name="confirmPassword" />}
        //                         sx={{ margin: '10px 0' }}
        //                         value={userInput.confirmPassword}
        //                         onChange={handleChange}
        //                     />
        //                     <Box
        //                         sx={{
        //                             display: 'flex',
        //                             justifyContent: 'space-between',
        //                             alignItems: 'center',
        //                             margin: '10px 0',
        //                             fontSize: 13,
        //                             color: 'lightgray',
        //                             '& .MuiSvgIcon-root': { fontSize: 15 },
        //                             '& .MuiLink-root': { textDecoration: 'none' },
        //                         }}
        //                     >
        //                         <Field as={Checkbox} name="eula" />
        //                         <Box component="span">
        //                             Đã đọc và đồng ý <Link href="#">Điều khoản dịch vụ</Link> &{' '}
        //                             <Link href="#">Chính Sách Về Quyền Riêng Tư</Link>
        //                         </Box>
        //                     </Box>
        //                     <FormHelperText>
        //                         <ErrorMessage name="eula" />
        //                     </FormHelperText>
        //                     {error && <Alert severity="error">{error}</Alert>}
        //                     {success && <Alert severity="success">{success}</Alert>}
        //                     <Field
        //                         as={Button}
        //                         type="submit"
        //                         variant="contained"
        //                         size="large"
        //                         fullWidth
        //                         disabled={props.isSubmitting}
        //                         sx={{ margin: '10px 0' }}
        //                     >
        //                         {props.isSubmitting ? 'Đang tải...' : 'Đăng ký'}
        //                     </Field>
        //                 </Form>
        //             )}
        //         </Formik>
        //         <Box align="center" marginTop="30px">
        //             <Button
        //                 fontSize="18px"
        //                 onClick={handleBackToFormLogin}
        //                 sx={{
        //                     display: 'flex',
        //                     alignItems: 'center',
        //                     '& .MuiSvgIcon-root': { fontSize: 17 },
        //                 }}
        //             >
        //                 <Typography>Quay lại đăng nhập</Typography>
        //                 <ArrowForwardIosIcon />
        //             </Button>
        //         </Box>
        //     </Box>
        // </React.Fragment>
    );
}

export default FormRegister;
