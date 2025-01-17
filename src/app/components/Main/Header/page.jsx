'use client'

import { motion, useScroll, useTransform } from "framer-motion";
import { useParallaxStore, useParallaxSettings } from '../../../store/useParallaxStore';
import { useRef } from "react";

const Header = () => {
    const isParallaxEnabled = useParallaxStore((state) => state.isParallaxEnabled);
    const { getScrollMultiplier, getAnimationMultiplier } = useParallaxSettings();

    // برای استفاده از تنظیمات در انیمیشن‌ها
    const scrollMultiplier = getScrollMultiplier();
    const animationMultiplier = getAnimationMultiplier();

    // استفاده در انیمیشن‌ها
    const circleAnimation = isParallaxEnabled ? {
        scale: [1, 1.1 * animationMultiplier, 1],
        transition: { duration: 2, repeat: Infinity }
    } : {};
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0', '8%']);

    const transformStyle = useTransform(
        scrollYProgress,
        [0, 1],
        ['0%', '250%']
    );

    return (
        <motion.div
            ref={ref}
            className="info-card relative"
            style={isParallaxEnabled ? { y, translateY: '0px' } : undefined}
        >
            {/* Circles */}
            <motion.div
                className="info-outer-circle -top-12 -right-12"
                animate={isParallaxEnabled ? {
                    scale: [1, 1.1, 1],
                    transition: { duration: 2, repeat: Infinity }
                } : {}}
            />
            <motion.div
                className="info-inner-circle -top-11 -right-8"
                animate={isParallaxEnabled ? {
                    scale: [1, 1.2, 1],
                    transition: { duration: 2.5, repeat: Infinity }
                } : {}}
            />

            <motion.div
                className="info-outer-circle -bottom-12 -left-12"
                animate={isParallaxEnabled ? {
                    scale: [1, 1.1, 1],
                    transition: { duration: 2, repeat: Infinity }
                } : {}}
            />
            <motion.div
                className="info-inner-circle -bottom-8 -left-8"
                animate={isParallaxEnabled ? {
                    scale: [1, 1.2, 1],
                    transition: { duration: 2.5, repeat: Infinity }
                } : {}}
            />

            <div className="relative">

                <img src="/img/Danial_Photo.png" alt="danial alborz picture" className="info-profile-pic z-50" />

                {/* Living Cell SVG Animation */}
                {isParallaxEnabled && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        style={{
                            y: transformStyle
                        }}
                        className="absolute top-10 left-2 -translate-x-1/2 mt-4 -z-10"
                    >
                        <svg width="200" height="200" viewBox="0 0 200 200">
                            <defs>
                                <radialGradient id="cellGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                                    <stop offset="0%" stopColor="#2373ce" stopOpacity="0.6" />
                                    <stop offset="100%" stopColor="#06283d" stopOpacity="0.8" />
                                </radialGradient>
                                <filter id="goo">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                                </filter>
                            </defs>

                            <motion.circle
                                cx="100"
                                cy="100"
                                r="80"
                                fill="url(#cellGradient)"
                                filter="url(#goo)"
                                animate={{
                                    r: [80, 85, 80],
                                    filter: ["blur(0px)", "blur(2px)", "blur(0px)"]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />

                            {[...Array(8)].map((_, i) => (
                                <motion.circle
                                    key={i}
                                    cx="100"
                                    cy="100"
                                    r="15"
                                    fill="rgba(35, 203, 206, 0.5)"
                                    animate={{
                                        cx: [100 + Math.cos(i * Math.PI / 4) * 60, 100 + Math.cos(i * Math.PI / 4) * 70, 100 + Math.cos(i * Math.PI / 4) * 60],
                                        cy: [100 + Math.sin(i * Math.PI / 4) * 60, 100 + Math.sin(i * Math.PI / 4) * 70, 100 + Math.sin(i * Math.PI / 4) * 60],
                                    }}
                                    transition={{
                                        duration: 2 + i * 0.2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}
                        </svg>
                    </motion.div>
                )}

            </div>

            <motion.p
                className="info-introduce"
                animate={isParallaxEnabled ? {
                    y: [0, -10, 0],
                    transition: { duration: 2, repeat: Infinity }
                } : {}}
            >
                I AM DANIAL ALBORZ
            </motion.p>

            <motion.p
                className="info-job-title"
                animate={isParallaxEnabled ? {
                    y: [0, -5, 0],
                    transition: { duration: 1.5, repeat: Infinity, delay: 0.2 }
                } : {}}
            >
                Not a Web designer
            </motion.p>

            <motion.p
                className="info-sign"
                animate={isParallaxEnabled ? {
                    y: [0, -8, 0],
                    transition: { duration: 1.8, repeat: Infinity, delay: 0.4 }
                } : {}}
            >
                <span className="text-xl text-[#062838] dark:text-[#dbd9d9]">Nor a Digital Marketer</span><br />
                I'M here to grow your Company
            </motion.p>

            <motion.a
                className="info-btn"
                href="#"
                whileHover={isParallaxEnabled ? { scale: 1.05 } : {}}
                whileTap={isParallaxEnabled ? { scale: 0.95 } : {}}
            >
                LET'S DO THIS!
            </motion.a>
        </motion.div>
    );
}

export default Header;
