import React from 'react';
import ImageSlide from './ImageSlide.jsx';

let slides = require("../assets/data/slide.json");
let playlist = require("../assets/data/playlist.json");

console.log(globalConfig);

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
    for (let i = 0; i < slides.length; i++) { // Checks slide.json for "_id"
      for (let j = 0; j < playlist.slides.length; j++) { // Checks playslist.json for "slideID"
        if (playlist.slides[j].slideID === slides[i]._id) {
          console.log("found match");
          let slideList = Object.assign(playlist.slides[j], slides[i]);
          console.log("slidelist: ",slideList);
        }
        else {
          console.log("no match");
        }
      }
    };
    console.log(playlist.slides);
  }

  componentDidMount() {
    //console.log(this.state);
    setTimeout(this.incrementSlideCount.bind(this), playlist.slides[0].duration);
  }

  incrementSlideCount() {
    let newSlide = this.state.slideCount + 1;
    if(newSlide >= playlist.slides.length) {
      newSlide = 0;
    }
    this.setState({slideCount: newSlide});
    //console.log(this.state);
    // let key = "duration";
    // console.log(slides[1][key]);
    console.log('slide:', newSlide);
    //console.log('playlist slide', playlist.slides[newSlide].duration, playlist.slides[newSlide].slideID);
    //console.log(slides[newSlide]._id);
    //console.log(playlist.slides[newSlide].slideID);

    setTimeout(this.incrementSlideCount.bind(this), playlist.slides[newSlide].duration);
  }

  render() {
    return (
      <div className="slider">
        Config: { globalConfig.mode }
        <br />
        Slide: { this.state.slideCount }
        <br />
        SlideID: { playlist.slides[this.state.slideCount].slideID }
        <br />
        { playlist.slides[this.state.slideCount].content.url }
        <ImageSlide imageUrl={ playlist.slides[this.state.slideCount].content.url } />
      </div>
    );//<VideoSlide videoUrl={ playlist.slides[this.state.slideCount].content.url } />
  }
}

export default Slider;
