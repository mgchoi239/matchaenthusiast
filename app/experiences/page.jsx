"use client";

import React from "react";
import PhotoCard from "@components/PhotoCard";
import experienceData from "/public/assets/data/experiences_data.json";

const page = () => {
  return (
    <section className="w-full flex-center flex-col">
      {/* <br />
      <h1 className="head_text text-center">EXPERIENCES</h1>
      <h1 className="head_text text-center">COMING SOON</h1> */}
      {/* <h1>Your Website</h1> */}
      {experienceData.map((data) => (
        <PhotoCard data={data} />
      ))}
    </section>
  );
};

export default page;
