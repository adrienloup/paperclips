import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/src/pages/home/Home.page.tsx';
import PagePage from '@/src/pages/page/Page.page.tsx';
import '@/src/generic/app/App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/paperclips"
          element={<HomePage />}
        />
        <Route
          path="/paperclips/*"
          element={<HomePage />}
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
