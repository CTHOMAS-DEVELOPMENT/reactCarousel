import React from "react";
export default class Slide extends React.Component {
  render() {
    return (
      <div
        className={[0, 1, 3, 4].indexOf(this.props.index) ? "show5" : ""}
        style={{ display: this.props.index === 2 ? "none" : "" }}
      >
        <img src={this.props.slide.previewURL} />

        <p>
          <small>{this.props.slide.tags}</small>
        </p>
      </div>
    );
  }
}
