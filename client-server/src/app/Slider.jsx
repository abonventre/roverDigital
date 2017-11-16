import React from 'react';
import ImageSlide from './ImageSlide.jsx';

let slides = require("../assets/data/slide.json");
//console.log("slides:", slides);

class Slider extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      slideCount: 0
    };
  }

  componentDidMount() {
    //console.log(this.state);
    //setInterval(this.incrementSlideCount.bind(this), slides[1].duration);
    setTimeout(this.incrementSlideCount.bind(this), slides[0].duration);
  }

  incrementSlideCount() {
    let newSlide = this.state.slideCount + 1;
    if(newSlide >= slides.length) {
      newSlide = 0;
    }
    this.setState({slideCount: newSlide});
    //console.log(this.state);
    //let key = "duration";
    //console.log(slides[1][key]);
    setTimeout(this.incrementSlideCount.bind(this), slides[newSlide].duration);
  }

  render() {
    return (
      <div className="slider">
        Slide: { this.state.slideCount }
        { slides[this.state.slideCount].content.url }
        <ImageSlide imageUrl={slides[this.state.slideCount].content.url} />
      </div>
    );
  }

}

export default Slider;
