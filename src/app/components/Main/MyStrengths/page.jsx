'use client'

import { motion } from 'framer-motion';
import { useParallaxStore } from '../../../store/useParallaxStore';
import styled from 'styled-components';

const AnimatedBox = styled(motion.div)`
    position: relative;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 2px solid transparent;
        border-radius: inherit;
        animation: borderAnimation 2s linear infinite;
    }

    @keyframes borderAnimation {
        0% { transform: rotate(0deg); border-color: #33a3ff; }
        50% { border-color: #3366ff; }
    }

    &:hover {
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        background-size: 400% 400%;
        animation: gradient 15s ease infinite;
    }

    @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
`;

const MyStrange = () => {
    const isParallaxEnabled = useParallaxStore((state) => state.isParallaxEnabled);


    return (
        <div className="strengths-container">
            <motion.p
                className="text-white text-center md:text-3xl lg:text-4xl"
                initial={isParallaxEnabled ? { opacity: 0, y: 20 } : {}}
                animate={isParallaxEnabled ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
            >
                MY STRENGTHS
            </motion.p>

            <div className="strengths-ul">
                {[
                    { img: "/img/organized.png", text: "ORGANIZED" },
                    { img: "/img/skillful.png", text: "SKILLFULL" },
                    { img: "/img/motivated.png", text: "MOTIVATED" }
                ].map((item, index) => (
                    <AnimatedBox
                        key={index}
                        className="strengths-li"
                        initial={isParallaxEnabled ? { opacity: 0, y: 30 } : {}}
                        animate={isParallaxEnabled ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: index * 0.2 }}
                    >
                        <img className="strengths-li-img" src={item.img} alt="" />
                        <p className="text-white text-center">{item.text}</p>
                    </AnimatedBox>
                ))}
            </div>
        </div>
    );
};

export default MyStrange;
