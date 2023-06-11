
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import axios from "axios"
import React from 'react'
import { useLocation } from "react-router-dom";

const Homepage = () => {
  const [posts,setPosts]=useState([]);
  const {search}=useLocation();
  useEffect(()=>{
    const fetchPosts=async()=>{
      const res=await axios.get("http://localhost:5000/api/posts"+search);
       setPosts(res.data);
    //  console.log(res)

    }
    fetchPosts();
  },[search])
  return (
  <>
    <Header />
    <div className="home">
      <Posts posts={posts} />

      <Sidebar />
    </div>
  </>
);
}

export default Homepage
