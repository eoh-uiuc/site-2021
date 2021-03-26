import React from "react";

import Profile from "./Profile";
import committee from "./committee.js";

const About = () => {
    return (
        <div className="page-container about-wrapper">
            <h2>EOH Central Committee</h2>
            {/* <p>Blurb about the committee</p> */}
            
            <div className="profiles">
                {committee.map(c => <Profile {...c} key={c.name} />)}
            </div>
        </div>
    );
}

export default About;