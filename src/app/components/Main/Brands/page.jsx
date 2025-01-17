'use client'

import { motion } from 'framer-motion';
import { useParallaxStore } from '../../../store/useParallaxStore';
import { useState } from 'react';

const Brands = () => {
    const isParallaxEnabled = useParallaxStore((state) => state.isParallaxEnabled);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;
        setMousePosition({ x, y });
    };

    if (!isParallaxEnabled) {
        return <img className="brands-bar" src="/img/brands.svg" alt="" />;
    }

    return (
        <motion.div
            className="relative"
            onMouseMove={handleMouseMove}
            style={{
                perspective: 1000
            }}
        >
            <motion.img
                className="brands-bar"
                src="/img/brands.svg"
                alt=""
                animate={{
                    rotateX: mousePosition.y * 15,
                    rotateY: mousePosition.x * 15,
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                }}
                whileHover={{ scale: 1.05 }}
            />
        </motion.div>
    );
};

export default Brands;
