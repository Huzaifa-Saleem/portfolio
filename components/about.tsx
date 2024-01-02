"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After earning a degree in{" "}
        <span className="font-medium">Software Engineering</span>, I decided to
        turn my passion for technology into a career. I honed my skills in
        full-stack web development through hands-on experience and training.
        Solving complex problems is what I find most rewarding in programming,
        and the thrill of finding innovative solutions keeps me motivated. My
        primary stack includes{" "}
        <span className="italic underline">
          MERN (MongoDB, Express.js, React, Node.js)
        </span>
        , and I have proficiency in{" "}
        <span className="italic underline">
          TypeScript, Nest, Next.js, and AWS.
        </span>{" "}
        I am currently developing a SaaS product named SchemaSync, leveraging
        Express.ts and Next.js. This innovative tool streamlines backend
        automation, making schema and API creation seamless for users.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
