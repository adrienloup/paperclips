import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SummaryPage from '@/src/summary/Summary.page';
import ExplorePage from '@/src/explore/Explore.page';
import GamePage from '@/src/game/Game.page';
import '@/src/generic/common/app/App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/paperclips/summary/" element={<SummaryPage />} />
        <Route path="/paperclips/explore/" element={<ExplorePage />} />
        <Route path="/paperclips/*" element={<GamePage />} />
        <Route path="/paperclips/" element={<GamePage />} />
        <Route path="/*" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
