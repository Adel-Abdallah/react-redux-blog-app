// src/components/PostItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ post }) => {
    return (
      <div className="post-item">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <Link to={`/posts/${post.id}`} className="read-more-button">Read more</Link>
      </div>
    );
  };
  
  export default PostItem;
