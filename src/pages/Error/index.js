import React from "react";

import ErrorImage from "../../assets/error.png";

const Error = () => {
    return (
        <div className="error-page">
            <img src={ErrorImage} alt="404" />
            <p>This page could not be found.</p>
        </div>
    );
}

export default Error;