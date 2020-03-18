import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';

const App = () => {
  const [photo, setPhoto] = useState([]);
  
  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then (response => {
      console.log(response);
    })
    .catch(error => {
      console.log('There is an error jabin', error)
    });
  });

  return <div className='App'>

  </div>;
}

export default App;
