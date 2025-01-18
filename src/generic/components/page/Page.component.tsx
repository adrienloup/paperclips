import { Page } from '@/src/generic/components/page/Page.type';
import { HeaderComponent } from '@/src/generic/components/header/Header.component';
import { MainComponent } from '@/src/generic/components/main/Main.component';
import { FooterComponent } from '@/src/generic/components/footer/Footer.component';

export const PageComponent = ({ children }: Page) => {
  return (
    <>
      <HeaderComponent />
      <MainComponent>{children}</MainComponent>
      <FooterComponent />
    </>
  );
};
