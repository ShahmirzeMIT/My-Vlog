import React, { useContext, useEffect, useReducer } from "react";
import { PageConatiner } from "../PageConatiner";
import "../assets/scss/news.scss";
import Linkedin from "../assets/image/linkedin.png";
import Reddit from "../assets/image/reddit.png";
import Twiter from "../assets/image/twiter.png";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Fade } from "react-reveal";
import MyContact from "../components/contact";
import CustomCard from "../components/card";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

const reducer = (state, action) => {
  switch (action.type) {
    case "get-data":
      return action.payload;
      break;
  }
};

const News = () => {
  const navigate = useNavigate();
  const [data, dispatch] = useReducer(reducer, []);

  const MyIcons = [
    {
      src: Linkedin,
      text: "Linkedin",
    },
    {
      src: Reddit,
      text: "Reddit",
    },
    {
      src: Twiter,
      text: "Twiter",
    },
  ];

  useEffect(() => {
    api
      .get("/news")
      .then(({ news }) => dispatch({ type: "get-data", payload: news }))
      .catch((error) => console.log(error));
  }, []);

  return (
    <PageConatiner>
      <div>
        <div className="title">
          <div className="container">
            <h1>Are You Aware of It ?</h1>
          </div>
        </div>
      </div>

      <MyContact text="red" />
      <div
        className="container d-flex justify-content-center myContent gap-3 my-7"
        id="red"
      >
        {data.map((elem, index) => (
          <CustomCard
            key={index}
            text={elem.description}
            title={elem.title}
            image={elem.image}
          />
        ))}
      </div>
    </PageConatiner>
  );
};

export default News;
