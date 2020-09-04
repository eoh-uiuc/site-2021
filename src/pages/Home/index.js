import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="event-name">
                    <h1>Engineering Open House 2021</h1>
                    <h3>University of Illinois at Urbana-Champaign</h3>
                </div>
                <div className="splash-message">
                    <h4>To the members of our EOH Community:</h4>
                    <p> 
                        At this point in time, the Engineering Open House Central Committee is taking 
                        the state of our campus and country into consideration as we proceed to make decisions 
                        for EOH 2021. We do not take this global pandemic lightly. Therefore, to prioritize the safety and 
                        well-being of our students, visitors, and the Champaign-Urbana community, we will be 
                        creating an EOH like never before.
                    </p>
                    <div />
                    <p>
                        Our hope is to create a virtual presence that will 
                        allow for a more accessible event, and that will continue to hold the 
                        same spirit of EOH from the past 100 years: to have the students of the University of 
                        Illinois showcase the world of engineering in the hopes of 
                        inspiring our larger community.
                    </p>
                    <div />
                    <p>We appreciate your patience and support at this time, and we plan to update our website 
                        and social media platforms with our final decision soon.
                    </p>
                    <p id="message-signature">— Emily Roth, Director of Engineering Open House 2021</p>
                </div>
            </div>
        );
    }
}

export default Home;