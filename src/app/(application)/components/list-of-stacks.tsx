"use client";
import React from "react";
import { AnimatedTooltip } from "../../../components/ui/animated-tooltip";
import ts from "../../../img/stack-list/ts.png";
import js from "../../../img/stack-list/js.png";
import react from "../../../img/stack-list/react.png";
import nextJS from "../../../img/stack-list/next.png";
import node from "../../../img/stack-list/node.png";
import nest from "../../../img/stack-list/nest.png";
import figma from "../../../img/stack-list/figma.png";
import tailwind from "../../../img/stack-list/tailwind.png";
import electron from "../../../img/stack-list/electron.png";

const stacks = [
  {
    id: 1,
    name: "Typescript",
    designation: "Programming Language",
    image: ts,
  },
  {
    id: 2,
    name: "Javascript",
    designation: "Programming Language",
    image: js,
  },
  {
    id: 3,
    name: "ReactJS",
    designation: "Library",

    image: react,
  },
  {
    id: 4,
    name: "NextJS",
    designation: "Framework",
    image: nextJS,
  },
  {
    id: 5,
    name: "NodeJS",
    designation: "Runtime Environment",
    image: node,
  },
  {
    id: 6,
    name: "React Native",
    designation: "Framework",
    image: react,
  },
  {
    id: 7,
    name: "NestJS",
    designation: "Framework",
    image: nest,
  },
  {
    id: 8,
    name: "TailwindCSS",
    designation: "CSS framework",
    image: tailwind,
  },
  {
    id: 9,
    name: "Figma",
    designation: "Design Tool",
    image: figma,
  },
  {
    id: 10,
    name: "Electron",
    designation: "Framework",
    image: electron,
  },
];

export function ListOfStacks() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={stacks} />
    </div>
  );
}
