import { MenuComponent } from '@/src/generic/common/component/menu/Menu.component.tsx';
import styles from '@/src/generic/common/component/header/Header.module.scss';

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
