import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPosts } from '../features/posts/postsSlice';
import { fetchComments } from '../features/comments/commentsSlice';
import { selectCommentsByPostId } from '../features/comments/commentsSelectors';

const PostDetailsPage = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const post = useSelector(state => state.posts.posts.find(p => p.id === parseInt(postId)));
  const comments = useSelector(state => selectCommentsByPostId(state, parseInt(postId)));

  useEffect(() => {
    if (!post) {
      dispatch(fetchPosts());
    }
    dispatch(fetchComments(postId));
  }, [dispatch, post, postId]);

  if (!post) return <p>Loading post...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <h2>Comments</h2>
      {comments.length === 0 ? (
        <p>No comments available.</p>
      ) : (
        <ul>
          {comments.map(comment => (
            <li key={comment.id} className="comment-item">{comment.body}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostDetailsPage;
