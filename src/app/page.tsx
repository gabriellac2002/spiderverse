import Header from './components/Header';
import HeroesList from './components/HeroesList';
import { HeroProvider } from '@/contexts/HeroContext';
import styles from "./page.module.scss";
import { IHeroData } from '@/interfaces/heroes';

async function getHeroesData(): Promise<IHeroData[]> {
  const res = await fetch(`${process.env.DOMAIN_ORIGIN}/api/heroes`, {
    next: { revalidate: 60 }, // Revalida a cada 60 segundos
  });

  if (!res.ok) {
    throw new Error('Falha ao buscar heróis');
  }

  const data = await res.json();
  return data;
}

export default async function Home() {
  const heroes = await getHeroesData();

  return (
    <HeroProvider initialHeroes={heroes}>
      <Header />
      <main className={styles.main}>
        <HeroesList heroes={heroes}/>
      </main>
    </HeroProvider>
  );
}
