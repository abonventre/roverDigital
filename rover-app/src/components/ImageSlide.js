import React from 'react';

const ImageSlide = (props) => {
  let background = {
    backgroundImage: `url(${props.content.url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1
  }
  console.log(props);

  return <div style={background} className={"imageSlide"+" "+props.className}></div>;
}

export default ImageSlide;
