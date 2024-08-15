"use client";
import { useEffect } from 'react';
import { useHeroes } from '@/contexts/HeroContext';
import { IHeroData } from '@/interfaces/heroes';

async function getHeroesData(): Promise<IHeroData[]> {
  const res = await fetch(`${process.env.DOMAIN_ORIGIN}/api/heroes`, {
    next: { revalidate: 60 }, 
  });

  if (!res.ok) {
    throw new Error('Falha ao buscar heróis');
  }

  const data = await res.json();
  return data;
}

export default function HeroDataFetcher() {
  const { setHeroes } = useHeroes();

  useEffect(() => {
    async function fetchData() {
      const heroes = await getHeroesData();
      setHeroes(heroes);
    }
    
    fetchData();
  }, [setHeroes]);

  return null; 
}
