import React from 'react';
import turtleImage from '../assets/ebt.png'; // Make sure this image exists
import turtleVideo from '../assets/Boxturtle.mp4';


function Turtle() {
  return (
    <div className="fact-card">
      <h2>Eastern Box Turtle</h2>
      <img
        src={turtleImage}
        alt="Eastern Box Turtle"
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
              <source src={turtleVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <ul></ul>
      <ul>
        <li>The eastern box turtle (Terrapene carolina carolina) is a subspecies within a group of hinge-shelled turtles normally called box turtles. T. c. carolina is native to the Eastern United States.</li>
        <li>Eastern Box Turtles can live over 50 years in the wild.</li>
        <li>They can completely close their shells to protect themselves.</li>
        <li>They have a homing instinct and often return to the same area.</li>
      </ul>
    </div>
  );
}

export default Turtle;
