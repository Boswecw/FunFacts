import React from 'react';
import deerImage from '../assets/wtd.png';
import deerVideo from '../assets/Whitetail.webm';

function Deer() {
  return (
    <div className="fact-card">
      <h2>White-tailed Deer</h2>
      <img
        src={deerImage}
        alt="White-tailed Deer"
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
        <source src={deerVideo} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <ul>
        <li>The white-tailed deer (Odocoileus virginianus)</li>
        <li> a medium-sized species of deer native to North, Central and South America.</li>
        <li>Their tails flash white as a warning signal to other deer.</li>
        <li>They can run up to 30 miles per hour to escape predators.</li>
        <li>White-tailed deer are excellent swimmers and often cross rivers.</li>
      </ul>
    </div>
  );
}

export default Deer;