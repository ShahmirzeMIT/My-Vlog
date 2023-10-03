import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Fade from "react-reveal/Fade";
import "../assets/scss/blogCard.scss";
import { useReducer } from "react";
import { useEffect } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "get-data":
      if (action.payload.length >= 200) {
        return { ...state, cutText: action.payload.substring(0, 200) };
      }
      return { ...state, cutText: action.payload };
      case "toggle-details":
        return { ...state, showDetails: !state.showDetails };
      default:
        return state
  }
};
const BlogCard = ({ title, text }) => {
  const [state, dispatch] = useReducer(reducer, {
    showDetails: false,
    cutText: text.substring(0, 200),
  });
  const { showDetails, cutText } = state;
  return (
    <Fade bottom className="bg-dark-subtle">
      <Card className="bg-dark-subtle my-3">
        <Card.Header as="h5" className="bg-dark-subtle">
          {title}
        </Card.Header>
        <hr />
        <Card.Body>
          <Card.Text className="bg-dark-subtle"> {showDetails ? text : cutText}</Card.Text>
          <Button
            variant="light"
            onClick={() => {
              dispatch({ type: "toggle-details" });
            }}
          >
            {showDetails ? "Less Details" : "More Details"}
          </Button>
        </Card.Body>
      </Card>
    </Fade>
  );
};

export default BlogCard;
