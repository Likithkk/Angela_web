import React from "react";

function Card(props){
    return(
      <div>
        <h2>{props.name}</h2>
        <img src="" alt="Profile"/>
        <p>{props.tel}</p>
        <p>Mail</p>
      </div>
    )
  }
function App(){
    return (
        <div>
        <h1>Contact Book</h1>
        <input id="fname" placeholder="Enter name"/>
        <Card name="Beyounce" tel="+31423423"/>
        </div>
    )
}

export default App;