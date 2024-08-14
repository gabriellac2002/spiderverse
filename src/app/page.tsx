import { IHeroData } from '@/interfaces/heroes';
import Header from './components/Header';
import HeroesList from './components/HeroesList';

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
    <>
      <Header />
      <HeroesList heroes={heroes} />
    </>
  );
}
