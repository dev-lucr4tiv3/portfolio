/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Fullstack Developer with a focus on web development, gaming, and cybersecurity. I enjoy building secure, efficient systems with modern technologies.";

/**
 * List of some of the skills or technologies I work on, am learning, 
 * passionate about, or enjoy.
 */
const skillsList = [
  "Web development",
  "Cybersecurity",
  "JavaScript (JS)",
  "React",
  "Node.js",
  "Lua",
  "PHP",
  "Gaming projects",
  "Open-source software",
];

/**
 * Use this to give more information about what I am passionate about, 
 * how I work, or even a quote. This helps others understand my approach.
 */
const detailOrQuote =
  "I’m passionate about creating secure, efficient systems and pushing the boundaries of my projects. I strive for continuous improvement and innovation.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
