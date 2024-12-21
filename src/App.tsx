import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GamePage from './game/Game.page';
import AutoClippersPage from './glossary/AutoClippers.page';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<GamePage />} />
        <Route path="/paperclips/" element={<GamePage />} />
        <Route path="/paperclips/*" element={<GamePage />} />
        <Route
          path="/paperclips/glossary/autoclippers/"
          element={<AutoClippersPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
