import { Main } from '@/src/generic/components/main/Main.type';
import styles from './Main.module.scss';

export const MainComponent = ({ children }: Main) => {
  return (
    <main className={styles.main} role="main">
      {children}
    </main>
  );
};
