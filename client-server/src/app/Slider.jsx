import React from 'react';
import ImageSlide from './ImageSlide.jsx';

class Slider extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      slideCount: 1
    };
  }

  componentDidMount() {
    console.log(this.state);
    setInterval(this.incrementSlideCount.bind(this), 3000);
  }

  incrementSlideCount() {
    let newSlide = this.state.slideCount + 1;
    if(newSlide > 3) {
      newSlide = 1;
    }
    this.setState({slideCount: newSlide});
    console.log(this.state);
  }

  render() {
    return (
      <div className="slider">
        Slide: { this.state.slideCount }
        { this.state.slideCount === 1 ? <ImageSlide imageUrl='assets/img/yosemite.jpg' /> : null }
        { this.state.slideCount === 2 ? <ImageSlide imageUrl='assets/img/rocks.jpg' /> : null }
        { this.state.slideCount === 3 ? <ImageSlide imageUrl='assets/img/flowers.jpg' /> : null }
      </div>
    );
  }

}

export default Slider;
