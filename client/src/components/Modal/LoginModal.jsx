import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectedModalLogin } from '../../redux/reducers/ModalReducer';
import { CloseModalLogin } from '../../redux/actions/ModalAction';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Login from '../Login/imdex';
import Register from '../Register/imdex';

export default function ModalLogin() {
    const isModal = useSelector(selectedModalLogin);
    const dispatch = useDispatch();
    const handleClose = () => dispatch(CloseModalLogin());

    return (
        <Modal open={isModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 420,
                    bgcolor: 'background.paper',
                    border: '2px solid none',
                    boxShadow: 24,
                    borderRadius: '5px',
                    p: 4,
                }}
            >
                <Box>
                    <Box sx={{ textAlign: 'right' }}>
                        <IconButton aria-label="delete" onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    {/* <Login /> */}
                    <Register />
                </Box>
            </Box>
        </Modal>
    );
}
