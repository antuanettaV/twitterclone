import React from "react";
import styles from "./Profile.module.css";

const Profile = ({ user }) => (
  <div className={styles.profileContainer}>
    <img
      src={user.profilePicture}
      alt={`${user.name}'s profile`}
      className={styles.profilePicture}
    />
    <h3 className={styles.userName}>{user.name}</h3>
    <p className={styles.userHandle}>@{user.username}</p>
  </div>
);

export default Profile;
