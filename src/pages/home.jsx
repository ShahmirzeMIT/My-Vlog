import React, { useEffect, useRef, useState } from "react";
import { PageConatiner } from "../PageConatiner";
import HeadLogo from "../assets/image/5.png";
import SitLogo from "../assets/image/6.png";
import Linkedin from "../assets/image/linkedin.png";
import Reddit from "../assets/image/reddit.png";
import Twiter from "../assets/image/twiter.png";
import { AiOutlineArrowDown } from "react-icons/ai";
import "../assets/scss/home.scss";

const Home = () => {
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

  const fadeInLeftRef = useRef(null);
  const fadeInLeftRef2 = useRef(null);
  const fadeInRightRef = useRef(null);
  const fadeInRightRef2 = useRef(null);
  const fadeInUpRef = useRef(null);

  const handleIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated");
        if (entry.target === fadeInLeftRef.current) {
          entry.target.classList.add("animate__fadeInLeft");
        } else if (entry.target === fadeInRightRef.current) {
          entry.target.classList.add("animate__fadeInRight");
        }
        if (entry.target === fadeInLeftRef2.current) {
          entry.target.classList.add("animate__fadeInLeft");
        } else if (entry.target === fadeInRightRef2.current) {
          entry.target.classList.add("animate__fadeInRight");
        } else if (entry.target === fadeInUpRef.current) {
          entry.target.classList.add("animate__fadeInUp");
        }
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    if (fadeInLeftRef.current) {
      observer.observe(fadeInLeftRef.current);
    }

    if (fadeInRightRef.current) {
      observer.observe(fadeInRightRef.current);
    }

    if (fadeInLeftRef2.current) {
      observer.observe(fadeInLeftRef2.current);
    }

    if (fadeInRightRef2.current) {
      observer.observe(fadeInRightRef2.current);
    }

    if (fadeInUpRef.current) {
      observer.observe(fadeInUpRef.current);
    }

    return () => {
      if (fadeInLeftRef.current) {
        observer.unobserve(fadeInLeftRef.current);
      }

      if (fadeInRightRef.current) {
        observer.unobserve(fadeInRightRef.current);
      }

      if (fadeInLeftRef2.current) {
        observer.unobserve(fadeInLeftRef2.current);
      }

      if (fadeInRightRef2.current) {
        observer.unobserve(fadeInRightRef2.current);
      }

      if (fadeInUpRef.current) {
        observer.unobserve(fadeInUpRef.current);
      }
    };
  }, []);

  return (
    <PageConatiner>
      <div className="container">
        <div className="d-flex justify-content-center mystyle">
          <div className="left" ref={fadeInLeftRef}>
            Motivation Everyone's Successful Story Is Key
          </div>
          <div className="right" ref={fadeInRightRef}>
            <img src={HeadLogo} alt="" />
          </div>
        </div>
        <div
          ref={fadeInUpRef}
          className="social d-flex justify-content-between my-5"
        >
          <div className="social-icons">
            <div className="myicon d-flex justify-content-between">
              {MyIcons.map((elem, index) => (
                <div key={index} className={elem.text}>
                  <a href="#">
                    <img src={elem.src} alt={elem.text} />
                    {elem.text}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="swipe">
            <a href="#down">
              <span>
                <AiOutlineArrowDown /> SWIPE DOWN
              </span>
            </a>
          </div>
        </div>
        <div id="down" className="brushUp d-flex justify-content-between">
          <div className="left" ref={fadeInRightRef2}>
            <img src={SitLogo} alt="" />
          </div>

          <div className="right" ref={fadeInLeftRef2}>
            <h2>Why do you brush up on always?</h2>
            <p>First of all, when I got hired for my first job</p>
          </div>
        </div>
      </div>
    </PageConatiner>
  );
};

export default Home;
