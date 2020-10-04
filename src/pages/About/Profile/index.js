import React, { Component } from "react";

class Profile extends Component {
    render() {
        return (
            <div className="profile-wrapper">
                <img src={this.props.headshot} alt="headshot" />
                <p id="member-name">{this.props.name}</p>
                <p id="member-position">{this.props.position}</p>
            </div>
        );
    }
}

export default Profile;