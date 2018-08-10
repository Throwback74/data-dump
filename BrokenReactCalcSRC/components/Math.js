import React from "react";
import Calculator from "./Calculator";

const Math = props => {
  let value;
  console.log(props);

  switch(props.operator) {
  case "+":
  value = props.num1 + props.num2;
  break;
  case "-":
  value = props.num1 - props.num2;
  break;
  case "*":
  value = props.num1 * props.num2;
  break;
  case "/":
  value = props.num1 / props.num2;
  break;
  default: 
  value = NaN;
}
return <span> value </span>
}

//   
//   return <span type="add">{num1} + {num2}</span>
// }
// function sum(a, b) {
//   return a + b;
// }
export default Math;