"use client";
import React from "react";
import { HeroParallax } from "../../../components/ui/hero-parallax";
import second from "@/img/gallery/2.jpg";
import third from "@/img/gallery/3.jpg";
import four from "@/img/gallery/4.jpg";
import five from "@/img/gallery/5.jpg";
import six from "@/img/gallery/6.jpg";
import seven from "@/img/gallery/7.jpg";
import eight from "@/img/gallery/8.jpg";
import nine from "@/img/gallery/9.jpg";
import ten from "@/img/gallery/10.jpg";
import eleven from "@/img/gallery/11.jpg";
import twelve from "@/img/gallery/12.jpg";
import thirteen from "@/img/gallery/13.jpg";
import fourteen from "@/img/gallery/14.jpg";
import fifteen from "@/img/gallery/15.jpg";
import sixteen from "@/img/gallery/16.jpg";

export function Gallery() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Me when I was a child",
    thumbnail: second,
  },
  {
    title: "ETEC Parque Belém - 2020 | Before a soccer match",
    thumbnail: third,
  },
  {
    title: "SENAI Anchieta - 2022 | Hanging on the interval",
    thumbnail: five,
  },
  {
    title: "SENAI Anchieta - 2023 | Eletrical Commands exam maded by me",
    thumbnail: six,
  },
  {
    title: "ETEC Parque Belém - 2022 | Before the conclusion of the course",
    thumbnail: four,
  },
  {
    title: "EACH USP - During a class",
    thumbnail: seven,
  },
  {
    title: "Nitro - Fixing a computer inside the company",
    thumbnail: eight,
  },
  {
    title: "My family's bar - 2023 | Coding a new feature for a system",
    thumbnail: nine,
  },
  {
    title: "Anjun Brasil - 2024 | After get pranked by my friends",
    thumbnail: ten,
  },
  {
    title: "ETEC Parque Belém - 2022 | Chilling with my friends after a class",
    thumbnail: eleven,
  },
  {
    title: "My Home - 2024 | Coding at my rest time",
    thumbnail: twelve,
  },
  {
    title: "My family's Bar - 2021 | Chillin w my grandma",
    thumbnail: thirteen,
  },
  {
    title: "A pool event - 2018 | Having fun with my friends",
    thumbnail: fourteen,
  },
  {
    title: "In a random gas station at Salesopolis - 2022 | After a long trip",
    thumbnail: fifteen,
  },
  {
    title: "At a event of photos - IDK | Just a random photo",
    thumbnail: sixteen,
  },
];
