import { Link, useLocation, useNavigate } from "react-router-dom";
import "./singlePost.css";
import { FiEdit} from 'react-icons/fi';
import { BsTrash } from 'react-icons/bs';
import React, { useContext, useEffect, useState } from 'react'
import axios from "axios";
import { Context } from "../../context/Context";

const SinglePost = () => {
  const Navigate=useNavigate();
  const { user } = useContext(Context);
  const location=useLocation()
const path=location.pathname.split("/")[2];
const [post,setPosts]=useState({})
const [title,setTitle]=useState("");
const [desc,setDesc]=useState("");
const [updateMode,setUpdateMode]=useState(false);
const PF="http://localhost:5000/images/";
useEffect(()=>{
  const getPost=async()=>{
    const res=await axios.get("http://localhost:5000/api/posts/"+path);
   setPosts(res.data);
   setTitle(res.data.title)
   setDesc(res.data.desc)
  }
  getPost();
},[path])
const handleDelete=async()=>{
  try {
    
    await axios.delete(`http://localhost:5000/api/posts/${post._id}`,{
      data:{username:user.username}
    })
    Navigate("/");
  } catch (error) {
    
  }
};

const handleUpdate=async()=>{
  try {
    
    await axios.put(`http://localhost:5000/api/posts/${post._id}`,{
     
        
        username:user.username,
        
        title,
        
        desc
    })
    setUpdateMode(false); 
  } catch (error) {
    console.log(error)
  }
}
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
      {post.photo && (

        <img
        className="singlePostImg"
        src={PF + post.photo}
        alt=""
        />
        )}
        {
          updateMode ? <input type="text" value={title} className="singlePostTitle" autoFocus onChange={(e)=>setTitle(e.target.value)}/>:(


            <h1 className="singlePostTitle">
        {title}
        {post.username === user?.username && (
          
          <div className="singlePostEdit">
            
            <FiEdit style={{color:"green"}} onClick={()=>setUpdateMode(true)}/> 
            <BsTrash style={{color:"red",marginLeft:"10px"}}  onClick={handleDelete}/>
           
          </div>
        )}
        </h1>
            )
          }
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to={`/?user=${post.username}`}>
               {post.username}
              </Link>
            </b>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        {
          updateMode ? (
            <textarea value={desc} className="singlePostDesc" onChange={(e)=>setDesc(e.target.value)}/>
          ) :(

        <p className="singlePostDesc">
        {desc}
        </p>
          )
        }
      {
        updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>Update</button>
        )
      }
      </div>
    </div>
  )
}

export default SinglePost
