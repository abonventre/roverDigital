import React from 'react';
import ImageSlide from './ImageSlide.jsx';

let slides = require("../assets/data/slide.json");
//console.log("slides:", slides);

class Slider extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      slideCount: 1
    };
  }

  componentDidMount() {
    //console.log(this.state);
    setInterval(this.incrementSlideCount.bind(this), slides[1].duration);
  }

  incrementSlideCount() {
    let newSlide = this.state.slideCount + 1;
    if(newSlide > 5) {
      newSlide = 1;
    }
    this.setState({slideCount: newSlide});
    //console.log(this.state);
    let key = "duration";
    console.log(slides[1][key]);
    //
  }

  render() {
    return (
      <div className="slider">
        Slide: { this.state.slideCount }
        { this.state.slideCount === 1 ? <ImageSlide imageUrl='assets/img/yosemite.jpg' /> : null }
        { this.state.slideCount === 2 ? <ImageSlide imageUrl='assets/img/rocks.jpg' /> : null }
        { this.state.slideCount === 3 ? <ImageSlide imageUrl='assets/img/flowers.jpg' /> : null }
        { this.state.slideCount === 4 ? <ImageSlide imageUrl='assets/data/slide.json' /> : null}
      </div>
    );
  }

}

export default Slider;
