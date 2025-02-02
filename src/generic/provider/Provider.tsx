import { ComponentPropsWithoutRef, ComponentType, ElementType, FunctionComponent } from 'react';

import { Children } from '@/src/generic/types/Children.type';
import { LanguageProvider } from '@/src/generic/i18n/Language.provider';
import { ThemeProvider } from '@/src/generic/theme/Theme.provider';
import { HeaderProvider } from '@/src/common/components/header/Header.provider';
import { DashboardProvider } from '@/src/game/components/dashboard/Dashboard.provider';

type ProvidersType = [
  ComponentType<{ children: Children }>,
  ComponentPropsWithoutRef<ElementType>?,
][];

const allProviders = (providers: ProvidersType) =>
  providers.reduce(
    (AccumulatedProviders, [Provider, props]) =>
      ({ children }) => (
        <AccumulatedProviders>
          <Provider {...props}>{children}</Provider>
        </AccumulatedProviders>
      ),
    ({ children }: { children: Children }) => <>{children}</>
  );

export const Provider: FunctionComponent<{ children: Children }> = allProviders([
  [LanguageProvider],
  [ThemeProvider],
  [HeaderProvider],
  [DashboardProvider],
]);
