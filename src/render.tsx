/* eslint-disable react-refresh/only-export-components */
import { BrowserRouter } from 'react-router-dom';
import { ReactElement, ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { render as customRender, RenderOptions } from '@testing-library/react';
import i18n from './generic/i18n';

const Providers = ({ children }: { children: ReactNode }) => (
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
  </BrowserRouter>
);

export const render = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  customRender(ui, { wrapper: Providers, ...options });
