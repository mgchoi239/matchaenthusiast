import * as React from "react";

const PhotoCard = ({ data }) => {
  const exp = data;

  return (
    <div className="photo-and-text-container">
      <a href={exp.link} class="photocard-link">
        <div className="photo-container">
          <img src={exp.imageSrc} alt="failed to load" />
        </div>
      </a>
      <div className="textContainer">
        <h2 style={{ fontWeight: "bold" }}>{exp.company}</h2>
        <h3 style={{ fontStyle: "italic" }}>{exp.role}</h3>
        <ul>
          <li>{exp.desc1}</li>
          <li>{exp.desc2}</li>
          <li>{exp.desc3}</li>
        </ul>
      </div>
    </div>
  );
};

export default PhotoCard;
