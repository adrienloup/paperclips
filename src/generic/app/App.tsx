import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GamePage from '@/src/pages/game/Game.page.tsx';
import ExplorePage from '@/src/pages/explore/Explore.page.tsx';
import Stage1Page from '@/src/pages/explore/subpages/Stage1.page.tsx';
import '@/src/generic/app/App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/paperclips"
          element={<GamePage />}
        />
        <Route
          path="/paperclips/*"
          element={<GamePage />}
        />
        <Route
          path="/paperclips/explore"
          element={<ExplorePage />}
        />
        <Route
          path="/paperclips/explore/stage1"
          element={<Stage1Page />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
