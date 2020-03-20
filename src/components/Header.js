import React from 'react'


                //we use props now because of header line in the content page. info.date 
const Header = (props) => {
    


    return (
        <div>
            <h1>NASA Picture OTD</h1>
            <h2>Date: {props.date}</h2>
        </div>
    )
}

export default Header