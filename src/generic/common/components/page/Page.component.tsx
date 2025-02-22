import { Page } from '@/src/generic/common/components/page/Page.type';
import { HeaderComponent } from '@/src/generic/common/components/header/Header.component';
import { MainComponent } from '@/src/generic/common/components/main/Main.component';
import { FooterComponent } from '@/src/generic/common/components/footer/Footer.component';
import styles from '@/src/generic/common/components/page/Page.module.scss';

export const PageComponent = ({ children }: Page) => {
  return (
    <div className={styles.page}>
      <HeaderComponent />
      <MainComponent>{children}</MainComponent>
      <FooterComponent />
    </div>
  );
};
