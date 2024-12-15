import React from 'react';
import TweetInteractions from './TweetInteractions';

const Post = ({ post }) => (
  <div className="post">
    <p>{post.content}</p>
    <TweetInteractions tweetId={post.id} />
  </div>
);

export default Post;

