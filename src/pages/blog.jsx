import React, { useContext, useEffect } from "react";
import { PageConatiner } from "../PageConatiner";
import BlogCard from "../components/blogCard";
import ChatLogo from "../assets/image/chat.jpg";
import "../assets/scss/blog.scss";
import BackToTop from "../layout/BackToTop/BackToTop";
import MyContact from "../components/contact";
import { useReducer } from "react";
import api from "../api/api";
import CircularProgress from '@mui/material/CircularProgress';
const initialState = {
  data: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "get-data":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
const Blog = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    api
      .get("/blog")
      .then(({ blog }) => {
        dispatch({ type: "get-data", payload: blog });
        console.log(blog);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(state);
  return (
    <>
      <div
        className="container d-flex justify-content-between align-items-center myChat"
        id="top"
      >
        <div className="left">
          <h1>You Can Read My Artile!</h1>
        </div>
        <div className="right">
          <img src={ChatLogo} alt="" />
        </div>
      </div>
      <div className="container">
        <MyContact text="down" />
      </div>
      <div className="container" id="down">
        {state.data && state.data.length > 0 ? (
          state.data.map((elem, index) => (
            <BlogCard key={index} title={elem.title} text={elem.description} />
          ))
        ) : (
       <div style={{textAlign:'center'}}><CircularProgress disableShrink className="my-4" /></div>
          
        )}
      </div>
    </>
  );
};

export default Blog;
