import React from "react";
export default class Slide extends React.Component {
  render() {
    //console.log(console.log(this.props.index));
    return (
      <li
        className={
          this.props.index == this.props.activeIndex
            ? "carousel__slide carousel__slide--active"
            : "carousel__slide"
        }
      >
        <img
          className="carousel-slide__content"
          src={this.props.slide.previewURL}
        />

        <p>
          <small className="carousel-slide__source">
            {this.props.slide.tags}
          </small>
        </p>
      </li>
    );
  }
}
