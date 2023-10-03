import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Fade } from "react-reveal";
import CircularProgress from '@mui/material/CircularProgress';
const Planets = () => {
  const [planets, setPlanets] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/planets`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const { results } = await response.json();
        setPlanets(results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log(planets);
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {planets && planets.length > 0 ? (
        planets.map((elem, inde) => (
          <>
            <Fade bottom>
              <CardContent
                className="my-3 py-4 mx-4"
                sx={{
                  width: 280,
                  border: "1px solid black",
                  textAlign: "center",
                  borderRadius: "10px",
                }}
              >
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {elem.name}
                </Typography>
                <Typography variant="h5" component="div">
                  {elem.gravity}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {elem.population}
                </Typography>
                <Typography variant="body2">
                  <a
                    href={elem.homeworld}
                    style={{ textDecoration: "none" }}
                    target="_blank"
                  >
                    HomeWorld
                  </a>
                </Typography>
              </CardContent>
            </Fade>
          </>
        ))
      ) : (
        <CircularProgress disableShrink className="my-4" />
      )}
    </div>
  );
};

export default Planets;
