import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(What to show , where to show)
// to run npm start

const name1 = "fname";
const name2 = "lname";
const currdate = new Date();
const year=currdate.getFullYear();
// Date(year,month,date,hours)

ReactDOM.render(
  <div>
    {/* to add any jsx data use { } */}
    {/* <h1>Hello {`${name1} ${name2}`}!</h1> or */}
    {/* <h1  contentEditable="true"> is used to edit in website */}
    {/* spellCheck="false" is used to remove red line when unidentified words are used */}
    {/* To write inline styling we need to ad style={{ .. }} */}
    <h1 className="heading">Hello {name1} {name2}!</h1>
    <p style={{ color:"blue" }}>This is a paragraph {year}.</p>
  
  </div>,
  document.getElementById("root")
);

var nums=[3,56,2,48,5];
const new_nums=nums.map(function (x){
    return x*2;
});
// else use nums.forEach(double);

const new_nums1=nums.filter(function (n){
    return num>10;
});

const new_nums2=nums.reduce(function (accumulator,current_num){
    return accumulator+current_num;
})

const new_nums3=nums.find(function (n){
    return n>10;
});

const new_nums4=nums.findIndex(function (x){
    return x>10
})
// to print substring => s.substring(start_idx,end_idx+1)

// To make interactive we use state => UI = f(State)
// React hooks => useState

import { useState } from "react";

function App(){
    const [state,setstate]=useState(x);
    // console.log(state); => [intial state=x, funtion bound]
    function inc(){
        setstate(state+1);
    }
    return(
        <div>
            <h1>{state}</h1>
            <button onClick={inc}>+</button>
        </div>
    )
}
// to set at interval => setInterval(func,time in ms)
// To update the state of useState send the new val as param in 2nd of use state

// to value of input use => event.target.value

// using functions is hook 
// we can also use class(but diff and complex) =>
// class App extends React.Component{
//  render(){
//      return (....)
//   }
// }
// export default App

// if given to array or obj to using spread operator( ... )
// a,b=> a=["item1","item2", ...b]
