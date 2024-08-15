import Header from './components/Header';
import HeroesList from './components/HeroesList';
import { HeroProvider } from '@/contexts/HeroContext';
import styles from "./page.module.scss";
import { IHeroData } from '@/interfaces/heroes';

export default function Home() {
  return (
    <HeroProvider>
      <Header />
      <main className={styles.main}>
        <HeroesList />
      </main>
    </HeroProvider>
  );
}
