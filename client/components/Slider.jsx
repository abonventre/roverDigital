import React from 'react';
import ImageSlide from './ImageSlide.jsx';

let slides = require("../assets/data/slide.json");
let playlist = require("../assets/data/playlist.json");

class Slider extends React.Component {

  constructor(props) {
    super(props);
    this.gatherSlides();
    this.state = {
      slideCount: 0
    };
    //console.log(playlist.slides.length);
  }

  gatherSlides() {
    console.log("getting slides");
    //let show = [];
    for (let i = 0; i < slides.length; i++) {
      // console.log(playlist.slides[i].slideID);
      // console.log(slides[i]._id);
      for (let j = 0; j < playlist.slides.length; j++) {
        if (playlist.slides[j].slideID === slides[i]._id) {
          console.log("in the loop");
          var copy = Object.assign({}, slides[i], playlist.slides[j]);
          //console.log(copy);
          // console.log(slides);
          // console.log(playlist.slides);
        }
      }
    };
  }

  componentDidMount() {
    //console.log(this.state);
    setTimeout(this.incrementSlideCount.bind(this), playlist.slides[0].duration);
  }

  incrementSlideCount() {
    let newSlide = this.state.slideCount + 1;
    if(newSlide >= slides.length) {
      newSlide = 0;
    }
    this.setState({slideCount: newSlide});
    //console.log(this.state);
    // let key = "duration";
    // console.log(slides[1][key]);
    console.log(newSlide);
    console.log(playlist.slides[newSlide].duration);
    //console.log(slides[newSlide]._id);
    //console.log(playlist.slides[newSlide].slideID);

    setTimeout(this.incrementSlideCount.bind(this), playlist.slides[newSlide].duration);
  }

  render() {
    return (
      <div className="slider">
        Slidexdsadsaxsx: { this.state.slideCount }
        { slides[this.state.slideCount].content.url }
        <ImageSlide imageUrl={slides[this.state.slideCount].content.url} />
      </div>
    );
  }

}

export default Slider;
