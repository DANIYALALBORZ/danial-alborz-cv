'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // برای انیمیشن‌های بهتر
import { useParallaxStore } from '../../../store/useParallaxStore';

const ThemeToggle = () => {
    const [theme, setTheme] = useState('auto');
    const { isParallaxEnabled, toggleParallax } = useParallaxStore();

    useEffect(() => {
        const savedTheme = localStorage.getItem('color-theme') || 'auto';
        setTheme(savedTheme);

        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else if (savedTheme === 'light') {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
        } else {
            changeTheme();
        }
    }, []);

    useEffect(() => {
        if (theme === 'auto') {
            window
                .matchMedia('(prefers-color-scheme: dark)')
                .addEventListener('change', changeTheme);
        } else {
            window
                .matchMedia('(prefers-color-scheme: dark)')
                .removeEventListener('change', changeTheme);
        }
        return () => {
            window
                .matchMedia('(prefers-color-scheme: dark)')
                .removeEventListener('change', changeTheme);
        };
    }, [theme]);

    const changeTheme = () => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
        }
    };

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
        } else if (newTheme === 'auto') {
            changeTheme();
        }
    };

    return (
        <div className="mode-container hidden lg:flex gap-2 p-2 bg-gray-100 dark:bg-[#304A65] rounded-lg">
            <motion.button
                className={`light-mode p-2 rounded-lg transition-colors ${theme === 'light' ? 'bg-blue-500 text-white' : 'hover:bg-gray-200 dark:hover:bg-sky-700/70'
                    }`}
                onClick={() => handleThemeChange('light')}
                whileTap={{ scale: 0.95 }}
            >
                <img
                    src="/img/light-mode.svg"
                    alt="Light Mode"
                    className="w-6 h-6"
                />
            </motion.button>

            <motion.button
                className={`dark-mode p-2 rounded-lg transition-colors ${theme === 'dark' ? 'bg-blue-500 text-white' : 'hover:bg-gray-200 dark:hover:bg-sky-700/70'
                    }`}
                onClick={() => handleThemeChange('dark')}
                whileTap={{ scale: 0.95 }}
            >
                <img
                    src="/img/dark-mode.svg"
                    alt="Dark Mode"
                    className="w-6 h-6"
                />
            </motion.button>

            <motion.button
                className={`auto-mode p-2 rounded-lg transition-colors ${theme === 'auto' ? 'bg-blue-500 text-white' : 'hover:bg-gray-200 dark:hover:bg-sky-700/70'
                    }`}
                onClick={() => handleThemeChange('auto')}
                whileTap={{ scale: 0.95 }}
            >
                Auto
            </motion.button>

            <motion.button
                className={`live-mode p-2 rounded-lg transition-colors ${theme === 'live' ? 'bg-blue-500 text-white' : 'hover:bg-gray-200 dark:hover:bg-sky-700/70'
                    }`}
                onClick={() => handleThemeChange('live')}
                whileTap={{ scale: 0.95 }}
            >
                Live Theme
            </motion.button>
        </div>
    );
};

export default ThemeToggle;
