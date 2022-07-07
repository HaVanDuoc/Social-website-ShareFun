import React from "react";
import "./Panel.scss";

import HomeIcon from "@mui/icons-material/Home";

const arrayButton = [];

const Panel = () => {
    return (
        <div className="hvdPanel">
            <div className="hvdPanelWrapper">
                <div className="button buttonProfile">P</div>

                <div className="button buttonNav">
                    <i>
                        <HomeIcon />
                    </i>
                </div>
                <div className="button buttonNav">
                    <i>
                        <HomeIcon />
                    </i>
                </div>
                <div className="button buttonNav">
                    <i>
                        <HomeIcon />
                    </i>
                </div>
            </div>
        </div>
    );
};

export default Panel;
