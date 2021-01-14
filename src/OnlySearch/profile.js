import React from "react";

const Profile = (props) => {
  const nameFont = props.isDark ? "white" : "black";
  return (
    <div className="profile">
      <img alt={props.profile.name} src={props.profile.photo_url} />
      <h3 style={{ color: nameFont }}>{props.profile.name}</h3>
      <h4>
        {props.profile.location} ${props.profile.cost}
      </h4>
      <p>{props.profile.description}</p>
      <button className="profile-link-button">Open OnlyFans</button>
    </div>
  );
};

export default Profile;
