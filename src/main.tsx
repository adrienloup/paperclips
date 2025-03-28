import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { version } from '@/package.json';
import { Provider } from '@/src/provider.tsx';
import App from '@/src/generic/app/App.tsx';
import '@/src/generic/i18n';

createRoot(document.getElementById('_paperclips_3mma_0')!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);

console.log(
  `%c[paperclips]%c${version}%c@jff`,
  'padding: 4px 3px 3px; background: #252529; font-weight: bold; color: #ff9800;',
  'padding: 4px 3px 3px; background: #ff9800; font-weight: bold; color: #252529;',
  'padding: 4px 3px 3px; background: #252529; font-weight: bold; color: #ff9800;'
);
