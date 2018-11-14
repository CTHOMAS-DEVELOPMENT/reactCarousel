import React from "react";
export default class LeftArrow extends React.Component {
  render() {
    return (
      <a
        href="#"
        className="image_section_svg carousel__arrow carousel__arrow--left"
        onClick={this.props.onClick}
      >
        <img type="image/svg+xml" src="images/arrowleft.svg" />
      </a>
    );
  }
}
