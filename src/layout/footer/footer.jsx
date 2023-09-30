import React from "react";
import Linkedin from "../../assets/image/linkedin.png";
import Reddit from "../../assets/image/reddit.png";
import Twiter from "../../assets/image/twiter.png";
import "../../assets/scss/footer.scss";
const Footer = () => {
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
  return (
    <div className="endUp">
      <div className="container">
        <div className="d-flex justify-content-center myIcons">
          {MyIcons.map((elem, index) => (
            <div key={index} className={elem.text}>
              <a href="#">
                <img src={elem.src} alt={elem.text}  className={elem.text}/>
              </a>
            </div>
          ))}
        </div>
        Site @by Soft-Sahil
      </div>
    </div>
  );
};

export default Footer;
