import React, { useEffect, useRef, useState } from "react";
import { PageConatiner } from "../PageConatiner";
import HeadLogo from "../assets/image/5.png";
import SitLogo from "../assets/image/6.png";
import Linkedin from "../assets/image/linkedin.png";
import Reddit from "../assets/image/reddit.png";
import Twiter from "../assets/image/twiter.png";
import { AiOutlineArrowDown } from "react-icons/ai";
import "../assets/scss/home.scss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
  const [slidesPerView, setSlidesPerView] = useState(5);

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

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 769) {
        setSlidesPerView(2);
      } else if (screenWidth > 768 && screenWidth < 992) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(5);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
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
            <Accordion className="my-2">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Retention</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Regular review helps reinforce what you've learned, making it easier to recall the information later.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="my-2">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Understanding</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Revisiting concepts allows for a deeper understanding and identification of gaps in knowledge.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="my-2">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Long-term Learning</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Spaced repetition and regular revision contribute to long-term retention of information.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="my-2">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Adaptation</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Knowledge evolves, and staying updated through revision ensures you're aware of the latest advancements and changes in your field..
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="my-2">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Application</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Regular revision helps you apply what you've learned to real-life scenarios, improving practical skills and problem-solving abilities.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className="my-swiper">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={slidesPerView}
            loop="true"
            //  pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide change")}
            className="my-5"
            style={{ justifyContent: "space-between" }}
          >
            <div className="swiper-wrapper">
              <SwiperSlide
                style={{
                  width: "100px !important",
                  height: "100px !important",
                  textAlign: "center",
                }}
                className="slider-img"
              >
                <h5>Set Clear Goals</h5>
                <p>
                  {" "}
                  Define specific, achievable objectives to provide direction
                  and motivation for your improvement efforts.
                </p>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  width: "100px !important",
                  height: "100px !important",
                  textAlign: "center",
                }}
                className="slider-img"
              >
                <h5>Continuous Learning</h5>
                <p>
                  Embrace a mindset of continuous learning and growth, seeking
                  knowledge and skills to enhance yourself.
                </p>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  width: "100px !important",
                  height: "100px !important",
                  textAlign: "center",
                }}
                className="slider-img"
              >
                <h5>Self-awareness</h5>
                <p>
                  Understand your strengths, weaknesses, values, and motivations
                  to tailor your improvement strategies effectively.
                </p>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  width: "100px !important",
                  height: "100px !important",
                  textAlign: "center",
                }}
                className="slider-img"
              >
                <h5>Adaptability</h5>
                <p>
                  {" "}
                  Be flexible and open to change, ready to adjust your
                  approaches based on feedback and new information.
                </p>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  width: "100px !important",
                  height: "100px !important",
                  textAlign: "center",
                }}
                className="slider-img"
              >
                <h5>Action-Oriented</h5>
                <p>
                  {" "}
                  Take proactive steps towards your goals, making consistent
                  efforts and avoiding procrastination.
                </p>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  width: "100px !important",
                  height: "100px !important",
                  textAlign: "center",
                }}
                className="slider-img"
              >
                <h5>Resilience</h5>
                <p>
                  {" "}
                  Build the ability to bounce back from setbacks and failures,
                  using them as learning experiences to fuel future progress.
                </p>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  width: "100px !important",
                  height: "100px !important",
                  textAlign: "center",
                }}
                className="slider-img"
              >
                <h5>Feedback and Reflection</h5>
                <p>
                  Seek feedback from others and engage in self-reflection to
                  understand your performance and areas for improvement.
                </p>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  width: "100px !important",
                  height: "100px !important",
                  textAlign: "center",
                }}
                className="slider-img"
              >
                <h5>Time Managemen</h5>
                <p>
                  Organize your time efficiently, prioritizing tasks and
                  dedicating focused periods to specific improvements.
                </p>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  width: "100px !important",
                  height: "100px !important",
                  textAlign: "center",
                }}
                className="slider-img"
              >
                <h5>Collaboration and Networking</h5>
                <p>
                  Connect with others, share experiences, and collaborate to
                  gain different perspectives and insights for improvement
                </p>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  width: "100px !important",
                  height: "100px !important",
                  textAlign: "center",
                }}
                className="slider-img"
              >
                <h5>Health and Well-being</h5>
                <p>
                  Prioritize your physical and mental health, ensuring you have
                  the energy and wellness to sustain your improvement journey.
                </p>{" "}
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </PageConatiner>
  );
};

export default Home;
