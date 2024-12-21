import { Link } from 'react-router-dom';
import { HeaderComponent } from '../generic/components/header/Header.component';
import { MainComponent } from '../generic/components/main/Main.component';
import { FooterComponent } from '../generic/components/footer/Footer.component';

function GamePage() {
  return (
    <>
      <HeaderComponent>header</HeaderComponent>
      <MainComponent>
        <div className="navigation">
          <Link to="/paperclips/">Game</Link>
          <Link to="/paperclips/glossary/autoclippers/">AutoClipers</Link>
        </div>
      </MainComponent>
      <FooterComponent />
    </>
  );
}

export default GamePage;
