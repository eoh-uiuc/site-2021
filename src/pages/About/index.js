import React, { Component } from "react";

import Profile from "./Profile";
import committee from "./committee.js";

class About extends Component {
    render() {
        return (
            <div className="about-wrapper">
                <h2>EOH Central Committee</h2>
                <p>About the committee</p>
                
                <div className="profiles">
                    {committee.map(c => <Profile {...c} key={c.name} />)}
                </div>
            </div>
        );
    }
}

export default About;