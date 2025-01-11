'use client';

import { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState('auto'); // light, dark, auto

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

        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else if (newTheme === 'light') {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
        } else {
            changeTheme();
        }
    };

    return (
        <div className="mode-container">
            <button className="light-mode" onClick={() => handleThemeChange('light')}>
                <img src="/img/light-mode.svg" alt="Light Mode" />
            </button>
            <button className="dark-mode" onClick={() => handleThemeChange('dark')}>
                <img src="/img/dark-mode.svg" alt="Dark Mode" />
            </button>
            <button className="auto-mode" onClick={() => handleThemeChange('auto')}>
                Auto
            </button>
            <div
                className={`mode-toggle ${theme === 'light'
                    ? '!left-0'
                    : theme === 'dark'
                        ? 'translate-x-[90%]'
                        : '!-right-1'
                    }`}
            ></div>
        </div>
    );
};

export default ThemeToggle;
