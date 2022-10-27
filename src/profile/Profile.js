import React from "react";
import { PropTypes } from "prop-types"; // ES6

const Profile = ({ fullName, bio, profession, children, handleName }) => {
  const HandleName = {handleName};
  return (
    <div>
      <h1>{fullName}</h1>
      <h2>{bio}</h2>
      <h2>{profession}</h2>
      
      {children}
      {handleName}
      
      <button onClick={() => HandleName(alert(`&{fullName}`))}>clic here</button>
    </div>
  );
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  children: PropTypes.string,
  handleName: PropTypes.func,
};
Profile.defaultProps = {
  fullname: "defult",
  bio: "defult",
  profession: "defult",
  children: "defult",
  handleName: "defult",
};

export default Profile;