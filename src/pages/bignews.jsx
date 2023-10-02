import React from "react";
import { PageConatiner } from "../PageConatiner";
import { useEffect } from "react";
import api from "../api/api";
import { useState } from "react";
import { useReducer } from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const reducer = (state, action) => {
  switch (action.type) {
    case "get-data":
      return action.payload;
      break;
  }
};
const BigNews = () => {
  const { sentId, setSentId } = useContext(AuthContext);
  const [state, dispatch] = useReducer(reducer, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
		if(sentId!=""){
		const response = await api.get(`/bignews/${sentId}`);
        dispatch({ type: "get-data", payload: response.bignews });	
		}
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (sentId) {
	fetchData();
	localStorage.setItem('sentId', sentId); 
   }
  }, [sentId]);

  useEffect(() => {
	const storedSentId = localStorage.getItem('sentId');
	if (storedSentId) {
	  setSentId(storedSentId);
	}
   }, [setSentId]);


  return (
    <>
      <div className="container">
		{state.map((elem,key)=>
			<div key={elem.id}>
			<h4 style={{fontWeight:'bold',fontSize:"1.7em"}}>{elem.title}</h4>
			<div style={{margin:'0 auto',textAlign:'center'}}>
				<img src={`http://127.0.0.1:8000/assets/image/bignews/${elem.image}`} style={{width:"80%",height:"50vh",margin:'0 auto'}} alt="" />
			</div>
			<p className="my-5">{elem.description}</p>
			</div>
		)}
	 </div>
    </>
  );
};

export default BigNews;
