"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import Image from "next/image";

interface ParallaxSectionProps {
    children?: ReactNode;
    imageSrc?: string;  // Optional image
    speed?: number;
    className?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ children, imageSrc, speed = -100, className = "" }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [speed, 0]);

    return (
        <div ref={ref} className={`relative h-screen w-screen p-0 flex items-center justify-center overflow-hidden ${className}`}>
            {/* Parallax Background */}
            <motion.div 
                style={{ y }} 
                className="absolute inset-0 w-full h-full"
            >
                {imageSrc ? (
                    <Image
                        src={imageSrc}
                        alt="Parallax Background"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-70"
                        priority
                    />
                ) : (
                    <div className="h-full w-full " />
                )}
            </motion.div>

            {/* Content */}
            <div className="relative z-10">{children}</div>
        </div>
    );
};

export default ParallaxSection;
