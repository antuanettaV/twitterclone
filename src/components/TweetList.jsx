import React from "react";

const TweetList = ({ tweets, onLike, onRetweet, onReply }) => {
  if (!tweets || tweets.length === 0) {
    return <p>No tweets available.</p>;
  }

  return (
    <div className="tweet-list">
      {tweets.map((tweet) => (
        <div key={tweet.id} className="tweet">
          <h3>{tweet.user}</h3>
          <p>{tweet.content}</p>
          {tweet.image && (
            <img
              src={tweet.image}
              alt="Tweet"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          )}
          <div className="tweet-interactions">
            <button onClick={() => onLike(tweet.id)}>❤️ {tweet.likes}</button>
            <button onClick={() => onRetweet(tweet.id)}>🔁 {tweet.retweets}</button>
            <button onClick={() => onReply(tweet.id)}>💬 {tweet.replies.length}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TweetList;
