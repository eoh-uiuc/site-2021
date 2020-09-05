import React, { Component } from "react";

import ErrorImage from "../../assets/error.png";

class Error extends Component {
    render() {
        return (
            <div className="error-page">
                <img src={ErrorImage} alt="404" />
                <p>This page could not be found.</p>
            </div>
        );
    }
}

export default Error;