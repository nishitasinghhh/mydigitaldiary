import React, { useEffect, useState } from 'react'
import {addDoc, collection, getDoc} from 'firebase/firestore'
import {db,auth} from '../firebase-config'
import {useNavigate} from 'react-router-dom'
function CreatePost({isAuth}) {
  const [title,setTitle]=useState("");
  const [postText,setPostText]=useState("");
  const postCollectionRef=collection(db,"posts")
  let navigate=useNavigate()
  const createPost= async()=>{
    await addDoc(postCollectionRef,{title,postText,author:{name:auth.currentUser.displayName,id:auth.currentUser.uid}})
    navigate("/")
  }
  useEffect(()=>{
    if(!isAuth)
      {
        navigate("/login")
      }
  },[])
  return (
    <div className='createPostPage'>
      <div className="cpContainer">
        <h1>Create A post</h1>
        <div className="inputGp">
          <label htmlFor="">Title</label>
          <input placeholder='Title...' onChange={(event)=>{setTitle(event.target.value)}} />
        </div>
        <div className="inputGp">
         <label htmlFor="">Post</label>
         <textarea placeholder='Post...'  onChange={(event)=>{setPostText(event.target.value)}} />
        </div>
        <button onClick={createPost}>Submit post</button>
      </div>
    </div>
  )
}

export default CreatePost