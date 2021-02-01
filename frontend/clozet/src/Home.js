import React from 'react'
import "./Home.css" ;
import logo from "./assets/images/logo.png" ;

function Home() {
    return (
        <div>
          <h1>
              HELLO  {'\u2728'}
          </h1>
          <img src={logo} alt="___" />
        </div>
    )
}

export default Home
