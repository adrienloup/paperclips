import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GamePage from '@/src/pages/game/Game.page.tsx';
import PagePage from '@/src/pages/page/Page.page.tsx';
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
          path="/paperclips/page"
          element={<PagePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
