import { Box, Link, Grid, Typography } from '@mui/material';
import React from 'react';
// Material Icon
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

const styleBoxLink = {
    display: 'flex',
    flexDirection: 'column',
};

const ArrayNewPostCart = [
    {
        href: '#',
        icon: <DriveFileRenameOutlineIcon />,
        textContent: 'Bài viết',
    },
    {
        href: '#',
        icon: <DriveFileRenameOutlineIcon />,
        textContent: 'Hình ảnh',
    },
    {
        href: '#',
        icon: <DriveFileRenameOutlineIcon />,
        textContent: 'Video',
    },
];

const NewPostCard = () => {
    return (
        <Box className="rightBarComponent">
            <Typography className="rightBarTitle">Mau đến gửi bài viết nào</Typography>
            <Grid container justifyContent="center" columns={3} marginTop="10px">
                {ArrayNewPostCart.map((link, index) => {
                    const { href, icon, textContent } = link;
                    return (
                        <Link href={href} key={index}>
                            <Box sx={styleBoxLink}>
                                {icon}
                                {textContent}
                            </Box>
                        </Link>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default NewPostCard;
