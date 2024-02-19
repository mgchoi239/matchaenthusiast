"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const Project = () => {
  const backgroundColor = "#c0cfb2";

  return (
    // <section className="w-full flex-center flex-col">
    //   <br />
    //   <h1 className="head_text text-center">PROJECTS</h1>
    //   <h1 className="head_text text-center">COMING SOON</h1>
    // </section>
    <div
      className={`pt-6 pl-6 pr-6 pb-6`}
      style={{ backgroundColor, overflow: "visible" }}
    >
      <section id="projects" class="projects sec-pad">
        <div class="main-container">
          <h2 class="heading heading-sec heading-sec__mb-bg">
            {/* <span class="heading-sec__main">Projects</span> */}
            {/* <span class="heading-sec__sub">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              facilis tempora explicabo quae quod deserunt eius sapiente
            </span> */}
          </h2>

          <div class="projects__content">
            <a href="https://github.com/mgchoi239/yahtzee">
              <div class="projects__row">
                <div class="projects__row-img-cont">
                  <img
                    src="/assets/images/yahtzee_play.gif"
                    alt="Software Screenshot"
                    class="projects__row-img"
                    loading="lazy"
                  />
                </div>
                <div class="projects__row-content">
                  <h3 class="projects__row-content-title">Yahtzee</h3>

                  <p class="projects__row-content-desc">
                    Digitalized version of Yahtzee — a game statistics that no
                    math major cannot pass by. Implemented with Python Socket
                    for server-client connection.
                  </p>
                </div>
              </div>
            </a>
            <a href="https://github.com/mgchoi239/matchaenthusiast">
              <div class="projects__row">
                <div class="projects__row-img-cont">
                  <img
                    src="/assets/images/matchaenthusiast.png"
                    alt="Software Screenshot"
                    class="projects__row-img"
                    loading="lazy"
                  />
                </div>
                <div class="projects__row-content">
                  <h3 class="projects__row-content-title">Matcha Enthusiast</h3>
                  <p class="projects__row-content-desc">
                    Personal website built with latest version of Next.js.
                    Currently in curated form, but working on v2, featuring user
                    interaction through comments and chats.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
