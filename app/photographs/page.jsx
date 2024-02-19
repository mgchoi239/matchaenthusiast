"use client";

import React from "react";
import PhotoCard from "@components/PhotoCard";
import Masonry from "react-masonry-css";
import { useState, useEffect } from "react";
import photoGraphData from "/public/assets/data/photographs_data.json";

const page = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 1,
  };
  const backgroundColor = "#f1ebe1";

  return (
    <div className={`pt-6 pl-6 pr-6 pb-6`} style={{ backgroundColor }}>
      {/* <div
        className="paragraph"
        style={{ display: "flex", alignItems: "center" }}
      >
        <img
          width="200"
          src={"/assets/images/digital_satire.png"}
          style={{ margin: "10px 10px 10px 20px" }}
        />
        <div style={{ margin: "10px 20px 10px 10px" }}>
          <p>
            The era of convenience has drowned us in the deluge of quantity,
            focusing less on the quality of each entity. Numerous shutters has
            shattered the value of each into smaller, unmemorable pieces.
          </p>
          <br />
          <p>
            As a meager attempt to swim against the current, I've challenged
            myself to a single shutter per object for the most discreet choice
            possible, encapsulating the original thoughts and perception into
            the moment.
          </p>
          <br />
          <p>Coming soon</p>
          <p style={{ textDecorationLine: "line-through" }}>
            Feel free to log in and leave a caption in the photos!
          </p>
        </div>
      </div> */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-column"
      >
        {photoGraphData.map((image, index) => (
          <div key={photoGraphData.length - 1 - index} className="masonry-item">
            <img
              src={photoGraphData[photoGraphData.length - 1 - index].imageSrc}
              alt={image.alt}
            />
            <div className="caption">
              {photoGraphData[photoGraphData.length - 1 - index].caption}
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default page;
