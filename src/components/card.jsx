import React from 'react';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Fade from 'react-reveal/Fade';
const CustomCard = ({title,text,image}) => {

  return (
    <Fade bottom>
    <MuiCard sx={{ maxWidth: 280 }} className='my-3'>
      <a href="#" style={{textDecoration:"none"}}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="140"
          image={`http://127.0.0.1:8000/assets/image/news/${image}`} 
          alt="green iguana"
        /> */}
        <img src={`http://127.0.0.1:8000/assets/image/news/${image}`} style={{width: "100%",
    height: "173px"}} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
      </a>
    </MuiCard>
    </Fade>
  );
};

export default CustomCard;
