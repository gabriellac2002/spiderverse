"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { IHeroData } from '@/interfaces/heroes';

interface HeroContextType {
    heroes: IHeroData[];
    setHeroes: React.Dispatch<React.SetStateAction<IHeroData[]>>;
}

const HeroContext = createContext<HeroContextType | undefined>(undefined);

interface HeroProviderProps {
    children: ReactNode;
}

export function HeroProvider({ children }: HeroProviderProps) {
    const [heroes, setHeroes] = useState<IHeroData[]>([]);

    useEffect(() => {
        async function getHeroesData() {
            const res = await fetch(`${process.env.DOMAIN_ORIGIN}/api/heroes`, {
                next: { revalidate: 60 },
            });

            if (!res.ok) {
                throw new Error('Falha ao buscar heróis');
            }

            const data = await res.json();
            setHeroes(data);
        }

        getHeroesData();
    }, []);

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
