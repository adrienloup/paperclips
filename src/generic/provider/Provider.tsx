import { ComponentPropsWithoutRef, ComponentType, ElementType, FunctionComponent } from 'react';

import { Children } from '@/src/generic/types/Children.type';
import { NotificationProvider } from '@/src/game/components/notifications/repository/Notification.provider.tsx';
import { LanguageProvider } from '@/src/generic/i18n/Language.provider';
import { HeaderProvider } from '@/src/generic/common/components/header/repository/Header.provider';
import { ThemeProvider } from '@/src/generic/theme/Theme.provider';
import { AsideProvider } from '@/src/generic/common/components/aside/repository/Aside.provider';
import { GameProvider } from '@/src/game/repository/Game.provider';

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
  [NotificationProvider],
  [LanguageProvider],
  [HeaderProvider],
  [ThemeProvider],
  [AsideProvider],
  [GameProvider],
]);
