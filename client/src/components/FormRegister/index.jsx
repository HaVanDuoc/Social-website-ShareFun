import { Box, Button, Checkbox, FormControlLabel, Link, TextField, Typography } from '@mui/material';
import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useDispatch } from 'react-redux';
import { FormLogin } from '../../redux/actions/SignInOutAction';

function FormRegister() {
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <Box component="form">
                <Box textAlign="center" margin="10px 0">
                    <Typography fontSize="25px" sx={{ pointerEvents: 'none' }}>
                        Đăng ký
                    </Typography>
                </Box>
                <TextField label="Email" type="email" fullWidth sx={{ margin: '10px 0' }} />
                <TextField
                    label="Mật khẩu 8-30 ký tự (không thể toàn chữ hoặc số)"
                    type="password"
                    fullWidth
                    sx={{ margin: '10px 0' }}
                />
                <TextField label="Xác Nhận Mật Khẩu" type="password" fullWidth sx={{ margin: '10px 0' }} />
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
                    <Checkbox />
                    <Box component="span">
                        Đã đọc và đồng ý <Link href="#">Điều khoản dịch vụ</Link> &{' '}
                        <Link href="#">Chính Sách Về Quyền Riêng Tư</Link>
                    </Box>
                </Box>
                <Button type="submit" variant="contained" fullWidth size="large" sx={{ margin: '10px 0' }}>
                    Đăng ký
                </Button>
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
