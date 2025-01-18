import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GamePage from '@/src/game/Game.page';
import ExplorePage from '@/src/explore/Explore.page';
import '@/src/App.scss';

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
