import { FooterComponent } from '../footer/Footer.component';
import { HeaderComponent } from '../header/Header.component';
import { MainComponent } from '../main/Main.component';
import { Page } from './Page.type';

export const PageComponent = ({ children }: Page) => {
  return (
    <>
      <HeaderComponent />
      <MainComponent>{children}</MainComponent>
      <FooterComponent />
    </>
  );
};
