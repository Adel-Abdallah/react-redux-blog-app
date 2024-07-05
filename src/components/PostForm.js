import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, updatePost, deletePost } from '../features/posts/postsSlice';

const PostForm = ({ currentPostId, setCurrentPostId }) => {
    const dispatch = useDispatch();
    const post = useSelector(state =>
        currentPostId ? state.posts.posts.find(p => p.id === currentPostId) : null
    );

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setBody(post.body);
        }
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentPostId) {
            dispatch(updatePost({ id: currentPostId, title, body }));
        } else {
            dispatch(addPost({ id: Date.now(), title, body }));
        }
        clearForm();
    };

    const clearForm = () => {
        setTitle('');
        setBody('');
        setCurrentPostId(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Body:</label>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                />
            </div>
            <button type="submit">{currentPostId ? 'Update' : 'Add'} Post</button>
            {currentPostId && (
                <button type="button" onClick={() => dispatch(deletePost(currentPostId))}>
                    Delete Post
                </button>
            )}
            <button type="button" onClick={clearForm}>
                Clear
            </button>
        </form>
    );
};

export default PostForm;
