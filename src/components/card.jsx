import React, { useEffect, useReducer } from "react";
import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Fade from "react-reveal/Fade";


const reducer = (state, action) => {
  switch (action.type) {
    case "get-data":
      if (action.payload.length >= 159) {
        return { ...state, cutText: action.payload.substring(0, 159) };
      }
      return { ...state, cutText: action.payload };
    case "toggle-details":
      return { ...state, showDetails: !state.showDetails };
    default:
      return state;
  }
};

const CustomCard = ({ title, text, image }) => {
  const [state, dispatch] = useReducer(reducer, {
    showDetails: false,
    cutText: text.substring(0, 159),
  });

  const { showDetails, cutText } = state;

  return (
    <Fade bottom>
      <MuiCard sx={{ maxWidth: 280 }} className="my-3">
        <CardActionArea>
          <img
            src={`http://127.0.0.1:8000/assets/image/news/${image}`}
            style={{ width: "100%", height: "173px" }}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {showDetails ? text : cutText}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {text.length > 159 && (
            <Button
              size="small"
              color="primary"
              onClick={() => dispatch({ type: "toggle-details" })}
            >
              {showDetails ? "Less Details" : "More Details"}
            </Button>
          )}
        </CardActions>
      </MuiCard>
    </Fade>
  );
};

export default CustomCard;

