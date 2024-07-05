import { createSelector } from 'reselect';

const selectCommentsState = (state) => state.comments;

export const selectCommentsByPostId = createSelector(
  [selectCommentsState, (state, postId) => postId],
  (commentsState, postId) => commentsState.comments.filter(comment => comment.postId === postId)
);
