import React from 'react';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import Post from './Post/Post.jsx';

const Posts = () => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);

    console.log(posts);

    return (
        <div>
            <h1>Posts</h1>
            <Post />
        </div>
    )
}

export default Posts
