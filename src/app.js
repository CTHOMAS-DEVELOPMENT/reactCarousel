import React from "react";
import ReactDOM from "react-dom";
import CarouselApp from "./components/CarouselApp";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

ReactDOM.render(<CarouselApp slides={[]} />, document.getElementById("app"));
