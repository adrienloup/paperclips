import { Page } from '@/src/common/components/page/Page.type';
import { HeaderComponent } from '@/src/common/components/header/Header.component';
import { MainComponent } from '@/src/common/components/main/Main.component';
import { FooterComponent } from '@/src/common/components/footer/Footer.component';

export const PageComponent = ({ children }: Page) => {
  return (
    <>
      <HeaderComponent />
      <MainComponent>{children}</MainComponent>
      <FooterComponent />
    </>
  );
};
