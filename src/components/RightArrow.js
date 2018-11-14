import React from "react";
export default class RightArrow extends React.Component {
  render() {
    return (
      <a
        href="#"
        className="image_section_svg carousel__arrow carousel__arrow--right"
        onClick={this.props.onClick}
      >
        <img type="image/svg+xml" src="images/arrowright.svg" />
      </a>
    );
  }
}
