import React from "react";
import StarWars from "./starwars";
import { useEffect } from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Fade } from "react-reveal";
const People = () => {
  const [people, setPeople] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/people`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const { results } = await response.json();
        setPeople(results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log(people);
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {people && people.length > 0 ? (
        people.map((elem, inde) => (
          <>
		<Fade bottom>
            <CardContent className="my-3 py-4 mx-4" sx={{width:280,border:'1px solid black',textAlign:'center',borderRadius:'10px'}}>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                 {elem.name}
              </Typography>
              <Typography variant="h5" component="div">
               {elem.mass}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {elem.gender}
              </Typography>
              <Typography variant="body2">
               <a href={elem.homeworld} style={{textDecoration:'none'}} target="_blank">HomeWorld</a>
              </Typography>
            </CardContent>
		  </Fade>
          </>
		
        ))
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
};

export default People;

