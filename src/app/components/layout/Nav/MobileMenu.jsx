'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParallaxStore } from '../../../store/useParallaxStore';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState('auto');
    const { isParallaxEnabled, toggleParallax } = useParallaxStore();

    useEffect(() => {
        const savedTheme = localStorage.getItem('color-theme') || 'auto';
        setTheme(savedTheme);
    }, []);

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('color-theme', newTheme);

        if (newTheme === 'live' && !isParallaxEnabled) {
            toggleParallax();
        } else if (newTheme !== 'live' && isParallaxEnabled) {
            toggleParallax();
        }

        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else if (newTheme === 'light') {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
        }

        setIsOpen(false); // بستن منو بعد از انتخاب
    };

    return (
        <div className="lg:hidden relative">
            <motion.button
                className="p-2 rounded-lg"
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.95 }}
            >
                <svg className="fill-black dark:fill-white" width="40" height="40" viewBox="0 0 20 20" xmlns="" fill="none">
                    <path fillRule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z" />
                </svg>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="absolute -left-0 mt-2 w-48 bg-white dark:bg-gray-800/60 rounded-lg shadow-lg overflow-hidden"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                    >
                        {[
                            { id: 'light', icon: '/img/light-mode.svg', label: 'Light Mode' },
                            { id: 'dark', icon: '/img/dark-mode.svg', label: 'Dark Mode' },
                            { id: 'auto', icon: '', label: 'Auto' },
                            { id: 'live', icon: '', label: 'Live Theme' }
                        ].map((item) => (
                            <motion.button
                                key={item.id}
                                className={`w-full px-4 py-3 flex items-center gap-3 ${theme === item.id
                                    ? 'bg-blue-500 text-white'
                                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                                    }`}
                                onClick={() => handleThemeChange(item.id)}
                                whileTap={{ scale: 0.98 }}
                            >
                                {item.icon && (
                                    <img
                                        src={item.icon}
                                        alt={item.label}
                                        className="w-5 h-5"
                                    />
                                )}
                                <span className="text-sm font-medium">{item.label}</span>
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default MobileMenu;
