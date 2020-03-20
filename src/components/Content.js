import React, {useState, useEffect} from "react" //be sure to put [] so that you dont run a big loop. 
import axios from 'axios' //be sure you ran NPM axios
import Header from './Header' //this imported the header file
import styled from 'styled-components' //this is required to use styled.<tag, p,button,div etc>


const PageStyle = styled.p`
  color: dodgerblue;
  max-width: 60%;
  display: flex;
  padding-left: 20%;
`;

const ImageStyle = styled.img`
  max-height: 20rem;
  border-radius: 15px;
`;

const DivStyle = styled.div`
  color: dodgerblue;
  &: hover{
    color:red
  };
`;

const Content = (props) => {

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
      <DivStyle>{info.title}</DivStyle>
      <div>{info.copyright}</div>
      <ImageStyle src={info.url} alt={info.title}/>
      <PageStyle>{info.explanation}</PageStyle>
    </div>

  )

}

  export default Content;


//==================================================================
//This is the layout of the API
//API LISTING
//"copyright": "Bryan Goff", Persons name
// "date": 
// "explanation", telling what the picture is 
// "hdurl": the image 
// "title" name of the picture
// "url": non HD image 

//==================================================================
// component example 
// each const === 1 style component 
// const DogButton = styled.button`
//   width: 100px;
//   height: 30px;
//   border: 0;
//   margin: 5px 10px;
//   background: ${props =>(props.primary ? "#fff" : "black")};
//   color: ${props => (props.primary ? "black" : "#fff")};
//   &:hover {
//     background: ${props => (props.primary ? "black" : "#fff")};
//     color: ${props => (props.primary ? "#fff" : "black")};
//   }
// `;