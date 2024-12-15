import React, { useState } from "react";

const TweetInput = ({ addTweet }) => {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTweet(content); 
    setContent(""); 
  };

  return (
    <form onSubmit={handleSubmit} className="tweet-input">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's happening?"
        rows="3"
        style={{
          width: "100%",
          borderRadius: "10px",
          padding: "10px",
          marginBottom: "10px",
        }}
      />
      <button type="submit" style={{ padding: "10px 20px", borderRadius: "5px" }}>
        Post
      </button>
    </form>
  );
};

export default TweetInput;



