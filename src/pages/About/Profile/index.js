import React from "react";

const Profile = ({ headshot, name, position }) => {
    return (
        <div className="profile-wrapper">
            <img src={headshot} alt="headshot" />
            <p id="member-name">{name}</p>
            <p id="member-position">{position}</p>
        </div>
    );
}

export default Profile;