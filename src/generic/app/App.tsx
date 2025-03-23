import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '@/src/generic/app/AppRoutes.tsx';
import '@/src/generic/app/App.scss';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
