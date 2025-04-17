import { MainComponent } from '@/src/generic/common/component/main/Main.component.tsx';
import { HeaderComponent } from '@/src/generic/common/component/header/Header.component.tsx';
import { FooterComponent } from '@/src/generic/common/component/footer/Footer.component.tsx';
import { Layout } from '@/src/generic/common/component/layout/Layout.type.ts';

function LayoutComponent({ children }: Layout) {
  // console.log('LayoutComponent');
  return (
    <>
      <HeaderComponent />
      <MainComponent>{children}</MainComponent>
      <FooterComponent />
    </>
  );
}

export default LayoutComponent;
