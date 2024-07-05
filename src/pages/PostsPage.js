import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/posts/postsSlice';
import PostItem from '../components/PostItem';
import PostForm from '../components/PostForm';

const PostsPage = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
    const [currentPostId, setCurrentPostId] = useState(null);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <div>
            <h1>Posts</h1>
            <PostForm currentPostId={currentPostId} setCurrentPostId={setCurrentPostId} />
            {posts.map(post => (
                <div key={post.id} onClick={() => setCurrentPostId(post.id)}>
                    <PostItem post={post} />
                </div>
            ))}
        </div>
    );
};

export default PostsPage;
