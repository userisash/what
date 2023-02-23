import React, { useRef } from 'react';

import blackAndWhiteImage1 from './images/blackAndWhiteImage1.png';
import coloredImage1 from './images/coloredImage1.png';
import blackAndWhiteImage2 from './images/blackAndWhiteImage2.png';
import coloredImage2 from './images/coloredImage2.png';

function ImageToggle() {
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);

  const handleMouseOver1 = () => {
    image1Ref.current.src = coloredImage1;
  };

  const handleMouseOut1 = () => {
    image1Ref.current.src = blackAndWhiteImage1;
  };

  const handleMouseOver2 = () => {
    image2Ref.current.src = coloredImage2;
  };

  const handleMouseOut2 = () => {
    image2Ref.current.src = blackAndWhiteImage2;
  };

  return (
    <div>
      <img
        ref={image1Ref}
        src={blackAndWhiteImage1}
        alt="Image 1"
        onMouseOver={handleMouseOver1}
        onMouseOut={handleMouseOut1}
      />
      <img
        ref={image2Ref}
        src={blackAndWhiteImage2}
        alt="Image 2"
        onMouseOver={handleMouseOver2}
        onMouseOut={handleMouseOut2}
      />
    </div>
  );
}

export default ImageToggle;
