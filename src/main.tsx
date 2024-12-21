import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { version } from '../package.json';
import App from './App.tsx';

createRoot(document.getElementById('_paperclips_3mma_0')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

console.log(
  `%c[paperclips]%c${version}%c@jff`,
  'padding: 4px 3px 3px; background: #171717; font-weight: bold; color: #e6e6e6;',
  'padding: 4px 3px 3px; background: #e6e6e6; font-weight: bold; color: #171717;',
  'padding: 4px 3px 3px; background: #171717; font-weight: bold; color: #e6e6e6;'
);
