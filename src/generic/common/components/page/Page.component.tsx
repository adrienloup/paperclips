import { HeaderComponent } from '@/src/generic/common/components/header/Header.component';
import { MainComponent } from '@/src/generic/common/components/main/Main.component';
import { FooterComponent } from '@/src/generic/common/components/footer/Footer.component';
import { Page } from '@/src/generic/common/components/page/Page.type';

export const PageComponent = ({ children }: Page) => {
  return (
    <>
      <HeaderComponent />
      <MainComponent>{children}</MainComponent>
      <FooterComponent />
    </>
  );
};
