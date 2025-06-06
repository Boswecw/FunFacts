import React from 'react';
import cardinalImage from '../assets/ncard.png'; // Ensure this image is present
import CardinalVideo from '../assets/Cardinal.webm';

function Cardinal() {
  return (
    <div className="fact-card">
      <h2>Northern Cardinal</h2>
      <img
        src={cardinalImage}
        alt="Northern Cardinal"
        className="animal-image"
      />
           <br></br>
      <video
  className="animal-video"
  autoPlay
  muted
  loop
  playsInline
>

 <source src={CardinalVideo} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <ul>
        <li>The northern cardinal (Cardinalis cardinalis), also commonly known as the common cardinal, red cardinal, or simply cardinal, is a bird in the genus Cardinalis. It can be found in southeastern Canada, through the eastern United States from Maine to Minnesota to Texas, New Mexico, southern Arizona, southern California and south through Mexico, Belize, and Guatemala.</li>
        <li>The Northern Cardinal is Kentucky’s state bird.</li>
        <li>Males are bright red; females are pale brown with red accents.</li>
        <li>They are known for their beautiful whistled songs.</li>
      </ul>
    </div>
  );
}

export default Cardinal;
