import React from "react";
import reactDom from "react-dom";

class clock extends React.Commponent {
  render(){
      return (
        <div>
          <h1>hello</h1>
          <h2>지금은 {this.props.date.toLocaleTimeString()} 입니다.</h2>
        </div>
      )
    }
  }


function tick() {
  reactDom.render(<clock date={new Date()} />, document.getElementById("root"));
}

setInterval(tick, 1000);