import Post from "../post/Post";
import "./posts.css";
import React from 'react'

const Posts = ({posts}) => {
  return (
    <div className="posts">
      
    {
      posts.map((pos) => (
        <Post post={pos}/>
      ))
    }
   </div>
  )
}

export default Posts