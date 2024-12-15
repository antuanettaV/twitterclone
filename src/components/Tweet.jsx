import React from "react";
import styles from "./Tweet.module.css";

const Tweet = ({ content, user, likes, retweets, replies, image, onLike, onRetweet, onReply }) => {
  return (
    <div className={styles.tweetContainer}>
      <h4 className={styles.userName}>{user}</h4>
      <p className={styles.content}>{content}</p>
      {image && <img src={image} alt="Tweet" className={styles.image} />}
      <div className={styles.interactions}>
        <button className={styles.interactionButton} onClick={onLike}>
          ❤️ {likes}
        </button>
        <button className={styles.interactionButton} onClick={onRetweet}>
          🔁 {retweets}
        </button>
        <button className={styles.interactionButton} onClick={onReply}>
          💬 {replies.length > 0 ? replies.length : "No replies"}
        </button>
      </div>
    </div>
  );
};

export default Tweet;
