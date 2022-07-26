import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import "./UpToTop.scss";

const UpToTop = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [showUpToTopButton, setShowUpToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            let viewportHeight = window.innerHeight;
            if (window.scrollY > viewportHeight) {
                setShowUpToTopButton(true);
            } else {
                setShowUpToTopButton(false);
            }
        });
    }, []);

    const handleUpToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Fragment>
            {showUpToTopButton && (
                <div
                    className="hvdUpToTop"
                    onClick={handleUpToTop}
                    style={
                        showUpToTopButton
                            ? { display: "block" }
                            : { display: "none" }
                    }
                >
                    <img src={PF + "images/UpToTop.png"} alt="UpToTop" />
                </div>
            )}
        </Fragment>
    );
};

export default UpToTop;
