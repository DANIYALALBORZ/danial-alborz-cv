'use client'

import { motion, useAnimation } from 'framer-motion';
import { useParallaxStore } from '../../../store/useParallaxStore';
import { useEffect, useState } from 'react'; // useState رو اضافه کردم
import { useInView } from 'react-intersection-observer';

const Counter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    });

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

const MyImpact = () => {
    const isParallaxEnabled = useParallaxStore((state) => state.isParallaxEnabled);
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    });
    const controls = useAnimation();

    useEffect(() => {
        if (inView && isParallaxEnabled) {
            controls.start('visible');
        }
    }, [inView, controls, isParallaxEnabled]);

    const imageVariants = {
        hidden: {
            opacity: 0,
            scale: 1.2,
            y: 50
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 1.2,
                ease: "easeOut" // اصلاح شده
            }
        }
    };

    const contentVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2 // اضافه شده
            }
        }
    };

    return (
        <div ref={ref}>
            <motion.div className="overflow-hidden"> {/* اضافه شده */}
                <motion.img
                    className="impact-img"
                    src="/img/danial-alborz.jpg"
                    alt=""
                    initial="hidden"
                    animate={controls}
                    variants={imageVariants}
                    style={{ willChange: 'transform' }}
                />
            </motion.div>

            <motion.div
                className="impact-container"
                initial="hidden"
                animate={controls}
                variants={contentVariants}
            >
                <motion.p
                    className="impact-title"
                    variants={contentVariants}
                >
                    MY IMPACT
                </motion.p>

                <motion.p
                    className="impact-sign"
                    variants={contentVariants}
                >
                    {isParallaxEnabled ? (
                        <>+<Counter end={57} /> FEEL CREATED</>
                    ) : (
                        "+57 FEEL CREATED"
                    )}
                </motion.p>

                <motion.p
                    className="impact-desc"
                    variants={contentVariants}
                >
                    I believe in the power of imagination.
                    i will transform your ideas and dreams into reality.
                    dedicated professionals work hand-in-hand with you to ensure that every details aligns with your vision.
                    with a focus on quality and innovation, i bring your concepts to life in ways that exceed your
                    exceptions.
                </motion.p>

                <motion.div
                    className="impact-box"
                    variants={contentVariants}
                >
                    {[
                        {
                            icon: "/img/member.png",
                            number: 1826,
                            text: "connected to more than 1,500 Employer and Employee",
                            className: "rounded-se-[5rem] rounded-es-[5rem]"
                        },
                        {
                            icon: "/img/new.png",
                            number: 28,
                            text: "+20 Companies are ready to help grow your business",
                            className: "rounded-ee-[5rem] rounded-ss-[5rem]"
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className={`impact-box-li ${item.className}`}
                            variants={contentVariants}
                            whileHover={{
                                scale: 1.05,
                                transition: { type: "spring", stiffness: 300 }
                            }}
                        >
                            <img width="64" height="64" src={item.icon} alt="" />
                            <p className="impact-box-title">
                                {isParallaxEnabled ? (
                                    <Counter end={item.number} />
                                ) : (
                                    item.number
                                )}
                            </p>
                            <p className="impact-box-desc">{item.text}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.a
                    className="bg-[#166FB1] p-4 rounded-2xl text-white font-mono font-bold text-xl lg:text-[1.2rem] shadow-lg w-fit"
                    href="#"
                    variants={contentVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Let's make a Feel!
                </motion.a>
            </motion.div>
        </div>
    );
}

export default MyImpact;
