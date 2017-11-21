import React from 'react';

const ImageSlide = (props) => {
  let background = {
    backgroundImage: `url(${props.imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%'
  }

  return <div style={background} className="imageSlide"></div>;
}

export default ImageSlide;
