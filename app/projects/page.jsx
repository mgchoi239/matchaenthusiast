"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const Project = () => {
  return (
    <section className="w-full flex-center flex-col">
      <br />
      <h1 className="head_text text-center">PROJECTS</h1>
      <h1 className="head_text text-center">COMING SOON</h1>
    </section>
  );
};

export default Project;
