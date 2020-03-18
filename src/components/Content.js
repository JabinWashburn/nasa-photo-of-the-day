import React, {useState, useEffect} from "react";
import axios from 'axios';

const Content = () => {
    const [photo, setPhoto] = useState([]);
  
  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then (response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  },[]);




}