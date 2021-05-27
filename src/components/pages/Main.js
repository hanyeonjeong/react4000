import { func } from "prop-types";
import React from "react";
import Header from "../Header";
import Layout from "../Layout";

function Info({ text1 }) {
  return (
      <div>{text1}</div>
  );
}

const textInfo = [
  {text1="We provide"},
  {text2="visual Coding"},
  {text3="Solutions"},
  {text4="For you webs"},
]

function Main() {
  return (
    <div id="wrap">
      <Header />
      <Layout>
        <section id="mainCont">
        <div className="main__cont">
         {textInfo.map((el) => (<Info text={text.text} />))}
         </div>
        </section>
      </Layout>
    </div>
  );
}
export default Main;