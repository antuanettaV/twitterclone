import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import TweetInput from "./components/TweetInput";
import TweetList from "./components/TweetList";

const App = () => {
  const [tweets, setTweets] = useState([
    {
      id: 1,
      content: "Hi. I am here ",
      user: "Christina S",
      likes: 0,
      retweets: 0,
      replies: [],
    },
  ]);

  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    const mockTweets = [
      {
        id: 2,
        content: "Christmas is coming!",
        user: "Michel M",
        image:
          "https://www.visitphilly.com/wp-content/uploads/2024/10/Love-park-dusk-christmas-village-courtesy-Christmas-Village-2200x1237px.jpg",
        likes: 0,
        retweets: 0,
        replies: [],
      },
    ];

    setTweets((prevTweets) => {
      const existingIds = prevTweets.map((tweet) => tweet.id);
      const newTweets = mockTweets.filter(
        (tweet) => !existingIds.includes(tweet.id)
      );
      return [...newTweets, ...prevTweets];
    });
  }, []);

  const addTweet = (content) => {
    if (!content.trim()) return; 
    const newTweet = {
      id: Date.now(),
      content,
      user: "Kris",
      likes: 0,
      retweets: 0,
      replies: [],
    };
    setTweets([newTweet, ...tweets]);
  };

  const handleLike = (id) => {
    setTweets((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === id ? { ...tweet, likes: tweet.likes + 1 } : tweet
      )
    );
  };

  const handleRetweet = (id) => {
    setTweets((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === id ? { ...tweet, retweets: tweet.retweets + 1 } : tweet
      )
    );
  };

  const handleReply = (id) => {
    const replyText = prompt("Enter your reply:"); 
    if (!replyText) return; 
    setTweets((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === id
          ? { ...tweet, replies: [...tweet.replies, { id: Date.now(), text: replyText }] }
          : tweet
      )
    );
  };

  const filteredTweets = tweets.filter((tweet) =>
    tweet.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <TweetInput addTweet={addTweet} />
        <TweetList
          tweets={filteredTweets}
          onLike={handleLike}
          onRetweet={handleRetweet}
          onReply={handleReply}
        />
      </div>
    </div>
  );
};

export default App;



