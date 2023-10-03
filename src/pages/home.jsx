import React, { useEffect, useRef, useState } from "react";
import { PageConatiner } from "../PageConatiner";
import HeadLogo from "../assets/image/5.png";
import SitLogo from "../assets/image/6.png";
import LaptopLogo from "../assets/image/7.png";
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
import Fade from "react-reveal/Fade";
import Slide from 'react-reveal/Slide';
import BackToTop from "../layout/BackToTop/BackToTop";
import CircularProgress from '@mui/material/CircularProgress';
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
  const AccContent = [
    {
      title: "Retention",
      text: "Regular review helps reinforce what you've learned, making it easier to recall the information later.",
    },
    {
      title: "Understanding",
      text: "Revisiting concepts allows for a deeper understanding and identification of gaps in knowledge.",
    },
    {
      title: "Long-term Learning",
      text: " Spaced repetition and regular revision contribute to long-term retention of information.",
    },
    {
      title: "Adaptation",
      text: "Knowledge evolves, and staying updated through revision ensures you're aware of the latest advancements and changes in your field.",
    },
    {
      title: "Application",
      text: "Regular revision helps you apply what you've learned to real-life scenarios, improving practical skills and problem-solving abilities.",
    },
  ];
  const SwipeContent = [
    {
      title: "Set Clear Goals",
      text: " Define specific, achievable objectives to provide direction and motivation for your improvement efforts.",
    },
    {
      title: "Continuous Learning",
      text: "Embrace a mindset of continuous learning and growth, seeking knowledge and skills to enhance yourself.",
    },
    {
      title: "Self-awareness",
      text: "Understand your strengths, weaknesses, values, and motivations to tailor your improvement strategies effectively.",
    },
    {
      title: "Adaptability",
      text: "Be flexible and open to change, ready to adjust your approaches based on feedback and new information.",
    },
    {
      title: "Action-Oriented",
      text: "Take proactive steps towards your goals, making consistent efforts and avoiding procrastination.",
    },
    {
      title: "Resilience",
      text: " Build the ability to bounce back from setbacks and failures, using them as learning experiences to fuel future progress.",
    },
    {
      title: "Feedback and Reflection",
      text: "Seek feedback from others and engage in self-reflection to understand your performance and areas for improvement.",
    },
    {
      title: "Time Management",
      text: " Organize your time efficiently, prioritizing tasks and dedicating focused periods to specific improvements.",
    },
    {
      title: "Collaboration and Networking",
      text: "Connect with others, share experiences, and collaborate to gain different perspectives and insights for improvement",
    },
    {
      title: "Health and Well-being",
      text: " Prioritize your physical and mental health, ensuring you have the energy and wellness to sustain your improvement journey.",
    },
  ];

  // const fadeInLeftRef = useRef(null);
  // const fadeInLeftRef2 = useRef(null);
  // const fadeInRightRef = useRef(null);
  // const fadeInRightRef2 = useRef(null);
  // const fadeInUpRef = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(5);

  // const handleIntersect = (entries, observer) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add("animate__animated");
  //       if (entry.target === fadeInLeftRef.current) {
  //         entry.target.classList.add("animate__fadeInLeft");
  //       } else if (entry.target === fadeInRightRef.current) {
  //         entry.target.classList.add("animate__fadeInRight");
  //       }
  //       if (entry.target === fadeInLeftRef2.current) {
  //         entry.target.classList.add("animate__fadeInLeft");
  //       } else if (entry.target === fadeInRightRef2.current) {
  //         entry.target.classList.add("animate__fadeInRight");
  //       } else if (entry.target === fadeInUpRef.current) {
  //         entry.target.classList.add("animate__fadeInUp");
  //       }
  //       observer.unobserve(entry.target);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   const options = {
  //     threshold: 0.5,
  //   };

  //   const observer = new IntersectionObserver(handleIntersect, options);

  //   if (fadeInLeftRef.current) {
  //     observer.observe(fadeInLeftRef.current);
  //   }

  //   if (fadeInRightRef.current) {
  //     observer.observe(fadeInRightRef.current);
  //   }

  //   if (fadeInLeftRef2.current) {
  //     observer.observe(fadeInLeftRef2.current);
  //   }

  //   if (fadeInRightRef2.current) {
  //     observer.observe(fadeInRightRef2.current);
  //   }

  //   if (fadeInUpRef.current) {
  //     observer.observe(fadeInUpRef.current);
  //   }

  //   return () => {
  //     if (fadeInLeftRef.current) {
  //       observer.unobserve(fadeInLeftRef.current);
  //     }

  //     if (fadeInRightRef.current) {
  //       observer.unobserve(fadeInRightRef.current);
  //     }

  //     if (fadeInLeftRef2.current) {
  //       observer.unobserve(fadeInLeftRef2.current);
  //     }

  //     if (fadeInRightRef2.current) {
  //       observer.unobserve(fadeInRightRef2.current);
  //     }

  //     if (fadeInUpRef.current) {
  //       observer.unobserve(fadeInUpRef.current);
  //     }
  //   };
  // }, []);

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
    <>
      <div className="container">
        <div className="d-flex justify-content-center mystyle" id="up">
          <Fade left big>
            <div className="left">
              Motivation Everyone's Successful Story Is Key
            </div>
          </Fade>
          <Fade right>
            <div className="right">
              <img src={HeadLogo} alt="" />
            </div>
          </Fade>
        </div>
        <Fade bottom>
          <div className="social d-flex justify-content-between my-5">
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
        </Fade>
        <div id="down" className="brushUp d-flex justify-content-between">
          <Fade right>
            <div className="left">
              <img src={SitLogo} alt="" />
            </div>
          </Fade>

          <Fade left>
          <div className="right">
            <h2>Why do you brush up on always?</h2>
            {AccContent.map((elem, index) => (
              <Accordion className="my-2" key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{elem.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{elem.text}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
          </Fade>
        </div>

        <div className="my-swiper">
        <Slide bottom>
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
            {SwipeContent.map((elem, index) => (
              <SwiperSlide
                style={{
                  width: "100px !important",
                  height: "100px !important",
                  textAlign: "center",
                }}
                className="slider-img"
                key={index}
              >
                <h5>{elem.title}</h5>
                <p>{elem.text}</p>{" "}
              </SwiperSlide>
            ))}
          </Swiper>
          </Slide>
        </div>

        <div className="useLpatop d-flex ">
          <Fade left>
          <div className="left">
            <h1>Why do you make progress yourselfy constantly!</h1>
            <p>
              Continuous progress is essential for personal growth, goal
              achievement, adaptability, confidence, learning, and seizing
              opportunities. It's about becoming better, achieving your
              aspirations, staying relevant, and embracing new chances.
            </p>
          </div>
          </Fade>
         <Fade right>
         <div className="right">
            <img src={LaptopLogo} alt="" />
          </div>
         </Fade>
         
        </div>
        
      </div>
     <BackToTop href="up"/>
    </>
  );
};

export default Home;
