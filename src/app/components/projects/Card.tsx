"use client";

import React, { useRef } from "react";

import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";

interface CardProps {
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
  isMobile?: boolean;
  index: any;
  progress: any;
  range: any;
  targetScale: any;
}

function Card({ title, description, src, link, color, isMobile, index, progress, range, targetScale }: CardProps) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"], // start when the top of the container reaches the top of the viewport, end when the bottom of the container reaches the bottom of the viewport
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]); // imageScale from 1 to 1.1 as the user scrolls 

  const scale = useTransform(progress, range, [1, targetScale]); // scale from 1 to targetScale as the user scrolls

  console.log("index", index);

  return (
    <div   // top-0
      ref={container}
      className="w-screen  h-screen max-lg:min-h-[50vh] overflow-hidden max-md:min-h-[60vh] sticky   p-[50px]"
      style={{ top: `calc(-5vh + ${index * 25}px)` }}
    > 
    {/* bg-glassmorphism bg-gray-900 */}
      <motion.div className="flex border-2 border-white md:flex-col justify-around relative rounded-2xl h-full w-full origin-top p-[50px]  shadow-lg backdrop-blur-md"
        style={{scale, backgroundColor: "#1E1C2F"}}>
        <h2 className="cardTitle">{title}</h2>

        <div className="h-full mt-[50px] gap-[50px] flex flex-col md:flex-row   ">
          <div
            className={` ${
              isMobile
                ? "phoneFrame"
                : "relative w-full md:w-3/5 h-full rounded-2xl overflow-hidden"
            }`}
          >
            <motion.div style={{scale: imageScale}} className="w-full h-full overflow-hidden rounded-xl border border-border">
              <Image fill src={`/projects/${src}`} alt="image" />
            </motion.div>
          </div>
          <div className="basis-2/6 flex flex-col gap-3 justify-between p-4 max-mobile-sm:p-2 max-mobile-sm:pt-0 relative">
            <p className="max-mobile-sm:text-md max-mobile-sm:max-h-[20vh] max-mobile-sm:overflow-y-auto max-mobile-sm:text-ellipsis">
              {description}
            </p>

            <span>
              <a href={link} target="_blank">
                See more
              </a>

              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Card;
