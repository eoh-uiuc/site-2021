import React, { Component } from "react";

import "./styles.scss";
import SplashImage from "../../assets/splash-image.svg";
import SponsorsImage from "../../assets/sponsors.png";

class Home extends Component {
    render() {
        return (
            <div>
                <div className="home-container">
                    <div className="splash-container">
                        <div>
                            <h2>Engineering Open House</h2>
                            <h1>Theme Name</h1>
                            <p>March 21 - 22, 2021</p>
                        </div>
                        <img className="splash-image" src={SplashImage} />
                    </div>
                    <div className="about-container">
                        <div>
                            <h2>30,000+</h2>
                            <p>Visitors</p>
                        </div>
                        <div>
                            <h2>250</h2>
                            <p>Exhibitors</p>
                        </div>
                        <div>
                            <h2>50</h2>
                            <p>Companies</p>
                        </div>
                    </div>
                    <div className="event-details-container">
                        <h1>Engineering Open House 2021</h1>
                        <div className="event-details">
                            <p>
                                Engineering Open House is an annual student-led STEM fair featuring two days
                                of exciting exhibits and captivating competitions. Join us for a celebration of the
                                talent and ingenuity of engineering students at the University of Illinois
                                at Urbana-Champaign.
                            </p>
                            <p>
                                The event is open to the public at no cost. Families, students, and
                                community members are invited to come and experience the atmosphere
                                of innovation and creativity.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="sponsors-container">
                    <h1>Thank You to Our Sponsors</h1>
                    <img className="sponsors-image" src={SponsorsImage} />
                </div>
            </div>
        )
    }
}

export default Home;