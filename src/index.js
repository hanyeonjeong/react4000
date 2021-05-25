import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props){
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="han"/>
      <Welcome name="yeon"/>
      <Welcome name="jeong"/>
    </div>
  );
}

ReactDOM.render(App(), document.getElementById("root"));