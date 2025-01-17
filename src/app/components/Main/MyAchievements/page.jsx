'use client'

import { motion, useAnimation } from 'framer-motion';
import { useParallaxStore } from '../../../store/useParallaxStore';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const TypewriterText = ({ text, delay = 0 }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 50 + delay);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text, delay]);

    return <span>{displayText}</span>;
};

const Counter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            let start = 0;
            const increment = end / (duration / 16);
            const timer = setInterval(() => {
                start += increment;
                if (start > end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);
            return () => clearInterval(timer);
        }
    }, [end, duration, inView]);

    return <span ref={ref}>{count}</span>;
};

const MyAchievements = () => {
    const isParallaxEnabled = useParallaxStore((state) => state.isParallaxEnabled);
    const { ref, inView } = useInView();
    const controls = useAnimation();

    // اضافه کردن useInView جداگانه برای sign و desc
    const { ref: signRef, inView: signInView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    });

    const { ref: descRef, inView: descInView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    });

    const [startSignTyping, setStartSignTyping] = useState(false);
    const [startDescTyping, setStartDescTyping] = useState(false);


    useEffect(() => {
        if (inView && isParallaxEnabled) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [inView, controls, isParallaxEnabled]);

    useEffect(() => {
        if (descInView && isParallaxEnabled) {
            setStartDescTyping(true);
        }
    }, [descInView, isParallaxEnabled]);

    useEffect(() => {
        if (inView && isParallaxEnabled) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [inView, controls, isParallaxEnabled]);


    return (
        <div ref={ref}>
            <motion.div
                className="ach-body"
                initial={isParallaxEnabled ? { opacity: 0, y: 50 } : {}}
                animate={controls}
                transition={{ duration: 0.5 }}
            >
                <p className="ach-title">
                    {isParallaxEnabled ? (
                        <TypewriterText text="MY ACHIEVEMENTS" />
                    ) : (
                        "MY ACHIEVEMENTS"
                    )}
                </p>

                <motion.p
                    ref={signRef}
                    className="ach-sign"
                    initial={isParallaxEnabled ? { opacity: 0, x: -20 } : {}}
                    animate={controls}
                    transition={{ delay: 0.3 }}
                >
                    {isParallaxEnabled && startSignTyping ? (
                        <TypewriterText text="Over 5 years with companies" />
                    ) : (
                        "Over 5 years with companies"
                    )}
                </motion.p>

                <motion.p
                    ref={descRef}
                    className="ach-desc"
                    initial={isParallaxEnabled ? { opacity: 0, y: 20 } : {}}
                    animate={controls}
                    transition={{ delay: 0.6 }}
                >
                    {isParallaxEnabled && startDescTyping ? (
                        <TypewriterText
                            text="My skills encompass management, ideation, branding and brand development, employee psychology, game development and website development. i' m the founder here and will personally oversee the process of advancing your business"
                            delay={2}
                        />
                    ) : (
                        "My skills encompass management, ideation, branding and brand development, employee psychology, game development and website development. i'm the founder here and will personally oversee the process of advancing your business"
                    )}
                </motion.p>

                <motion.a
                    className="ach-btn"
                    href="#"
                    initial={isParallaxEnabled ? { opacity: 0, scale: 0.9 } : {}}
                    animate={controls}
                    transition={{ delay: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Introduce More
                </motion.a>
            </motion.div>

            <div className="ach-footer">
                {[
                    {
                        number: 48000,
                        text: "over 5 years working with companies",
                        className: "rounded-se-[5rem] rounded-es-[5rem] lg:rounded-es-[5rem] lg:rounded-ss-[5rem] lg:rounded-se-none"
                    },
                    {
                        number: 100,
                        text: "Since 2022 we get +100 projects done.",
                        className: "rounded-ee-[5rem] rounded-ss-[5rem] lg:rounded-none"
                    },
                    {
                        number: 1000,
                        text: "+1000 Satisfied customers",
                        className: "rounded-ss-[5rem] rounded-ee-[5rem] lg:rounded-none"
                    },
                    {
                        number: 10,
                        text: "Spend 10% of the projects money on charity",
                        className: "rounded-se-[5rem] rounded-es-[5rem] lg:rounded-ee-[5rem] lg:rounded-se-[5rem] lg:rounded-es-none"
                    }
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        className={`ach-footer-box ${item.className}`}
                        initial={isParallaxEnabled ? { opacity: 0, scale: 0.9 } : {}}
                        animate={controls}
                        transition={{ delay: index * 0.2 + 1.2 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <p className="ach-box-title">
                            {isParallaxEnabled ? (
                                <>{item.number !== 10 && "+"}<Counter end={item.number} />
                                    {item.number === 10 && "%"}</>
                            ) : (
                                `${item.number !== 10 ? "+" : ""}${item.number}${item.number === 10 ? "%" : ""}`
                            )}
                        </p>
                        <p className="ach-box-desc">{item.text}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default MyAchievements;
