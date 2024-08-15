"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { IHeroData } from '@/interfaces/heroes';

interface HeroContextType {
    heroes: IHeroData[];
    setHeroes: React.Dispatch<React.SetStateAction<IHeroData[]>>;
}

const HeroContext = createContext<HeroContextType | undefined>(undefined);

interface HeroProviderProps {
    children: ReactNode;
    initialHeroes?: IHeroData[]; 
}

export function HeroProvider({ children, initialHeroes = [] }: HeroProviderProps) {
    const [heroes, setHeroes] = useState<IHeroData[]>(initialHeroes);

    return (
        <HeroContext.Provider value={{ heroes, setHeroes }}>
            {children}
        </HeroContext.Provider>
    );
}

export function useHeroes(): HeroContextType {
    const context = useContext(HeroContext);
    if (!context) {
        throw new Error('useHeroes deve ser usado dentro de um HeroProvider');
    }
    return context;
}
