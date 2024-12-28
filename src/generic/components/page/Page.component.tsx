import { Page } from './Page.type';
import { HeaderComponent } from '../header/Header.component';
import { MainComponent } from '../main/Main.component';
import { FooterComponent } from '../footer/Footer.component';

export const PageComponent = ({ children }: Page) => {
  return (
    <>
      <HeaderComponent />
      <MainComponent>{children}</MainComponent>
      <FooterComponent />
    </>
  );
};
