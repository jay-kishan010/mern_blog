import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./single.css";

import React from 'react'

const Single = () => {
  return (
    <div className="single">
    <SinglePost />
    <Sidebar />
  </div>
  )
}

export default Single