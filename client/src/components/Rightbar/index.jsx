import React from 'react';
import './RightBar.scss';

// data
import OfficialInformation from './components/OfficialInformation';
import HotTopic from './components/HotTopic';
import { Box } from '@mui/material';
import NewPostCard from './components/NewPostCard';

const RightBar = () => {
    return (
        <Box className="hvdRightBar">
            <NewPostCard />
            <OfficialInformation />
            <HotTopic />
        </Box>
    );
};

export default RightBar;
