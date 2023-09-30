import React from 'react';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Fade from 'react-reveal/Fade';
const CustomCard = () => {

  return (
    <Fade bottom>
    <MuiCard sx={{ maxWidth: 280 }} className='my-3'>
      <a href="#" style={{textDecoration:"none"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://via.placeholder.com/140"  
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
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
