// stores/useParallaxStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ParallaxSettings {
    scrollSpeed: number;
    animationIntensity: number;
    enableBlur: boolean;
}

interface ParallaxStore {
    // States
    isParallaxEnabled: boolean;
    settings: ParallaxSettings;

    // Actions
    toggleParallax: () => void;
    updateSettings: (newSettings: Partial<ParallaxSettings>) => void;
    resetSettings: () => void;
}

const DEFAULT_SETTINGS: ParallaxSettings = {
    scrollSpeed: 1,
    animationIntensity: 1,
    enableBlur: true,
};

export const useParallaxStore = create<ParallaxStore>()(
    persist(
        (set) => ({
            // Initial states
            isParallaxEnabled: false,
            settings: DEFAULT_SETTINGS,

            // Actions
            toggleParallax: () =>
                set((state) => ({
                    isParallaxEnabled: !state.isParallaxEnabled
                })),

            updateSettings: (newSettings) =>
                set((state) => ({
                    settings: {
                        ...state.settings,
                        ...newSettings,
                    },
                })),

            resetSettings: () =>
                set(() => ({
                    settings: DEFAULT_SETTINGS,
                })),
        }),
        {
            name: 'parallax-storage', // Local storage key
            partialize: (state) => ({
                isParallaxEnabled: state.isParallaxEnabled,
                settings: state.settings,
            }),
        }
    )
);

// Custom hook for accessing specific settings
export const useParallaxSettings = () => {
    const settings = useParallaxStore((state) => state.settings);
    const updateSettings = useParallaxStore((state) => state.updateSettings);

    return {
        settings,
        updateSettings,
        getScrollMultiplier: () => settings.scrollSpeed * 0.5,
        getAnimationMultiplier: () => settings.animationIntensity * 1.0,
    };
};
