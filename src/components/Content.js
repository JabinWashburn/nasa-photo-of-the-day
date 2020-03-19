import React, {useState, useEffect} from "react"
import axios from 'axios'
import Header from './Header' //this imported the header file

const Content = () => {

    const [info, setInfo] = useState([]);
  
  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then (response => {
      // console.log(response);
      setInfo(response.data)
    })
    .catch(error => {
      console.log(error)
    });
  },[]);

  return (
    <div>
      <Header date = {info.date} />
    <div>{info.title}</div>
    <div>{info.copyright}</div>
    <img src={info.url} alt={info.title}/>
    <p>{info.explanation}</p>
    </div>

  )

}

  export default Content;



//API LISTING
//"copyright": "Bryan Goff", Persons name
// "date": 
// "explanation", telling what the picture is 
// "hdurl": the image 
// "title" name of the picture
// "url": non HD image 