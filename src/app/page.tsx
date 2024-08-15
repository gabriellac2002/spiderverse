import Header from './components/Header';
import HeroesList from './components/HeroesList';
import { HeroProvider } from '@/contexts/HeroContext';
import styles from "./page.module.scss";
import HeroDataFetcher from './HeroData';

export default function Home() {
  return (
    <HeroProvider>
      <HeroDataFetcher />
      <Header />
      <main className={styles.main}>
        <HeroesList />
      </main>
    </HeroProvider>
  );
}
