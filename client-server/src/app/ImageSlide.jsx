import React from 'react';

// const ImageSlide = (props) => {
//   let background = {
//     backgroundImage: 'url(assets/img/yosemite.jpg)',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     width: '100%',
//     height: '100%'
//   }
//
//   return <div style={background} className="imageSlide"></div>;
// }

class ImageSlide extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      image: props.imageUrl,
    };
  }

  render() {
    let background = {
      backgroundImage: `url(${this.props.imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '100%'
    }

    return (
      <div style={background} className="imageSlide">
      </div>
    );
  }

}

export default ImageSlide;
