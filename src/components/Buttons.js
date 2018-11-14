import React from "react";
export default class Buttons extends React.Component {
  render() {
    const buttonClassName = `image_section carousel__arrow carousel__arrow--${
      this.props.direction
    }`;
    return (
      <div>
        <a href="#" className={buttonClassName} onClick={this.props.onClick}>
          <img src={this.props.imgName} />
        </a>
      </div>
    );
  }
}
