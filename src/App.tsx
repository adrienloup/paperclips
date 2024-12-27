import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GamePage from './game/Game.page';
import ExplorePage from './explore/Explore.page';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<GamePage />} />
        <Route path="/paperclips/" element={<GamePage />} />
        <Route path="/paperclips/*" element={<GamePage />} />
        <Route path="/paperclips/explore/" element={<ExplorePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
