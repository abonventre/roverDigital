import React from 'react';
import ImageSlide from './ImageSlide.jsx';

class Slider extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      slideCount: 1
    };
  }

  render() {
    return (
      <div className="slider">
        test
        { this.state.slideCount === 1 ? <ImageSlide imageUrl='assets/img/yosemite.jpg' /> : null }
        { this.state.slideCount === 2 ? <ImageSlide imageUrl='assets/img/rocks.jpg' /> : null }
        { this.state.slideCount === 3 ? <ImageSlide imageUrl='assets/img/flowers.jpg' /> : null }
      </div>
    );
  }

}

export default Slider;
