import React from 'react';
import wildcatImage from '../assets/wildcat.png'; // Update the path to your image
import wildcatVideo from '../assets/wildcat.mp4';

function Wildcat() {
  return (
    <div className="fact-card">
      <h2>Kentucky Wildcat</h2>
      <img
        src={wildcatImage}
        alt="Kentucky Wildcat"
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
        <source src={wildcatVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <ul>
        <li>The bobcat (Lynx rufus), also known as the wildcat, bay lynx,or red lynx, is one of the four extant species within the medium-sized wild cat genus Lynx. Native to North America, it ranges from southern Canada through most of the contiguous United States to Oaxaca in Mexico.</li>
        <li>The wildcat is a native predator and symbol of wilderness in Kentucky.</li>
        <li>It’s shy and elusive, often hiding in forested or brushy areas.</li>
        <li>Its image is famously used as the mascot for the University of Kentucky.</li>
      </ul>
    </div>
  );
}

export default Wildcat;
