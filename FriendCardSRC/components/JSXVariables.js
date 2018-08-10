import React from "react";

const name = "Corey";
const num1 = name.length;
const thoughts = "is pretty cool, but overly complicated in some ways. Maybe those things will make more sense later";



const JSXVariables = () => (
  <div className="main-container">
    <div className="container">
      <div className="jumbotron">
        <h1>Hi! My name is {name}</h1>
        <h2>My name has {num1} letters</h2>
        <h2>I think React {thoughts}</h2>
      </div>
    </div>
  </div>
);

export default JSXVariables;
