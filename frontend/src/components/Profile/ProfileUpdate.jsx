
import { useState } from "react";
import { updateUserBio, updateUserEmail, updateUserFullName } from "../../services/users";

export const ProfileUpdate = (props) => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [bio, setBio] = useState("");
  const token = localStorage.getItem("token");

  const handleSubmitEmail = async (event) => {
    event.preventDefault();
    try {
      await updateUserEmail(token, email, props.profile._id)
      .then((updatedUser) => {
        props.setProfile(updatedUser);
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmitFullName = async (event) => {
    event.preventDefault();
    try {
      await updateUserFullName(token, fullName, props.profile._id)
      .then((updatedUser) => {
        props.setProfile(updatedUser);
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmitBio = async (event) => {
    event.preventDefault();
    try {
      await updateUserBio(token, bio, props.profile._id)
      .then((updatedUser) => {
        props.setProfile(updatedUser);
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h3>Update Profile</h3>
      <form onSubmit={handleSubmitEmail}>
        <label htmlFor="email">Email:</label>
        <input
          placeholder="Email"
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input role="submit-button" id="submit" type="submit" value="Submit" />
      </form>
      <form onSubmit={handleSubmitFullName}>
        <label htmlFor="fullName">Full Name:</label>
        <input
          placeholder="Full Name"
          id="fullName"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input role="submit-button" id="submit" type="submit" value="Submit" />
      </form>
      <form onSubmit={handleSubmitBio}>
        <label htmlFor="bio">Bio:</label>
        <textarea
          placeholder="Say something about you!"
          id="bio"
          type="text"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        /><br/>
        <input role="submit-button" id="submit" type="submit" value="Submit" />
      </form>
    </>
  );
};
