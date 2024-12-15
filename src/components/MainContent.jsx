import React from "react";
import styles from "./MainContent.module.css";

const MainContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <img
          src="/path/to/profile.jpg"
          alt="Profile"
          className={styles.profilePicture}
        />
        <p className={styles.profileName}>Christina S</p>
        <p className={styles.profileUsername}>@kris</p>
      </div>

      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search Tweets"
          className={styles.searchBar}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.whatsHappening}>
          <input
            type="text"
            placeholder="What's happening?"
            className={styles.input}
          />
          <button className={styles.tweetButton}>Tweet</button>
        </div>
        <p className={styles.greeting}>Hi everybody!</p>
        <p className={styles.message}>Have an awesome day!</p>
      </div>
    </div>
  );
};

export default MainContent;
