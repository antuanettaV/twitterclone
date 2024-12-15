import React, { useState } from 'react';

const TweetInteractions = ({ tweetId }) => {
  const [likes, setLikes] = useState(0);
  const [retweets, setRetweets] = useState(0);

  return (
    <div>
      <button onClick={() => setLikes(likes + 1)}>❤️ {likes}</button>
      <button onClick={() => setRetweets(retweets + 1)}>🔄 {retweets}</button>
      <button>💬 Reply</button>
    </div>
  );
};

export default TweetInteractions;
