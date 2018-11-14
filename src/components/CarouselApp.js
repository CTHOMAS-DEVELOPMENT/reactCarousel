import React from "react";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import Slide from "./Slide";
import Buttons from "./Buttons";

class CarouselApp extends React.Component {
  state = {
    activeIndex: 0
  };

  goToSlide = index => {
    this.setState({
      activeIndex: index
    });
  };

  goToPrevSlide = e => {
    e.preventDefault();

    let index = this.state.activeIndex;
    let sliders = this.state.sliders;
    let slidesLength = sliders.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  };

  goToNextSlide = e => {
    e.preventDefault();

    let index = this.state.activeIndex;
    let sliders = this.state.sliders;
    let slidesLength = sliders.length - 1;
    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  };
  extractProjectData = inData => {
    return inData
      .filter((item, index) => index < 6)
      .map(item => {
        item.tags = item.tags.substr(0, 30);
        let { previewURL, tags, webformatURL } = item;
        return { previewURL, tags, webformatURL };
      });
  };
  componentDidMount() {
    const url = "https://pixabay.com/api/";
    const key = "9656065-a4094594c34f9ac14c7fc4c39";
    const query = "beautiful+landscape";
    const type = "photo";
    let topSixDetail = [];
    fetch(`${url}?key=${key}&q=${query}&image_type=${type}`)
      .then(response => response.json())
      .then(data => {
        topSixDetail = this.extractProjectData(data.hits);
console.log("topSixDetail",topSixDetail)
        this.setState({
          sliders: topSixDetail
        });
      });
  }
  render() {
    let sliders = [];
    if (typeof this.state.sliders !== "undefined") {
      sliders = this.state.sliders;
    }

    return (
      <div className="carousel">
        <LeftArrow onClick={e => this.goToPrevSlide(e)} />

        <ul>
          {sliders.map((slide, index) => (
            <Slide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
            />
          ))}
        </ul>

        <RightArrow onClick={e => this.goToNextSlide(e)} />

        <div>
          <Buttons
            key={"left"}
            direction={"left"}
            imgName={"images/left.png"}
            onClick={e => this.goToPrevSlide(e)}
          />
          <Buttons
            key={"right"}
            direction={"right"}
            imgName={"images/right.png"}
            onClick={e => this.goToNextSlide(e)}
          />
        </div>
      </div>
    );
  }
}
export default CarouselApp;
