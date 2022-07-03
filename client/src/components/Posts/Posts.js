import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post';

import useStyles from './styles'

const Posts = () => {

  const classes = useStyles();

  const posts = useSelector((state) => state.posts);

  return (
    <>
      <div><h1>ALL DEE POSTS - 2 POST BELO</h1></div>
      <Post />
      <Post />
    </>
  )
}


export default Posts;