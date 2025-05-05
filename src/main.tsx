import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Providers } from '@/src/providers.tsx';
import { version } from '@/package.json';
import App from '@/src/generic/app/App.tsx';
import '@/src/generic/i18n';

createRoot(document.getElementById('_paperclips_3mma_0')!).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>
);

console.log(
  `%c[App]%c${version}%c@jff`,
  'padding: 4px 3px 3px; background: #252529; font-weight: bold; color: #007eff;',
  'padding: 4px 3px 3px; background: #007eff; font-weight: bold; color: #252529;',
  'padding: 4px 3px 3px; background: #252529; font-weight: bold; color: #007eff;'
);
