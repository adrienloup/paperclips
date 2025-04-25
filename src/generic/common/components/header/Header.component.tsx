import { MenuComponent } from '@/src/generic/common/components/menu/Menu.component.tsx';
import styles from '@/src/generic/common/components/header/Header.module.scss';

export const HeaderComponent = () => {
  return (
    <header
      className={styles.header}
      role="banner"
    >
      <MenuComponent />
    </header>
  );
};
