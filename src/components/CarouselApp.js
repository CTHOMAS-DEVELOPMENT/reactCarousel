import React from "react";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import Slide from "./Slide";
import Buttons from "./Buttons";

class CarouselApp extends React.Component {
  state = {
    activeIndex: 2
  };

  goToPrevSlide = e => {
    e.preventDefault();

    console.log("this.state.sliders", this.state.sliders);
    let pArray = this.state.sliders.slice();
    let removedItem = pArray.pop();
    pArray.unshift(removedItem);

    this.setState({
      sliders: pArray
    });
  };

  goToNextSlide = e => {
    e.preventDefault();

    let pArray = this.state.sliders.slice();
    let removedItem = pArray.shift();
    pArray.push(removedItem);

    this.setState({
      sliders: pArray
    });
  };
  extractProjectData = inData => {
    return inData
      .filter((item, index) => index < 6)
      .map(item => {
        item.tags = item.tags.substr(0, 24);
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
      <div>
        <div className="flex-container">
          <LeftArrow onClick={e => this.goToPrevSlide(e)} />
          <Buttons
          key={"left"}
          direction={"left"}
          imgName={"images/left.png"}
          onClick={e => this.goToPrevSlide(e)}
        />
          {sliders.map((slide, index) => (
            <Slide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
            />
          ))}
          <Buttons
          key={"right"}
          direction={"right"}
          imgName={"images/right.png"}
          onClick={e => this.goToNextSlide(e)}
        />
          <RightArrow onClick={e => this.goToNextSlide(e)} />
        </div>



      </div>
    );
  }
}
export default CarouselApp;
