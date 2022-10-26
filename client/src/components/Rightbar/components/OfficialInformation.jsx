import React, { Fragment } from 'react';
import CampaignIcon from "@mui/icons-material/Campaign";

const DataOfficialInformation = [
    {
        id: 1,
        icon: <CampaignIcon />,
        name: "Quy tắc cộng đồng",
    },
];

const OfficialInformation = () => {
    return (
        <Fragment>
            <div className="rightBarComponent officialInformation">
                <div className="rightBarTitle">Thông tin chính thức</div>
                {DataOfficialInformation.map((item) => (
                    <div className="rightBarItem" key={item.id}>
                        <i style={{ color: 'dodgerblue' }}>{item.icon}</i>
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

export default OfficialInformation;
