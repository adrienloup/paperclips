import { ComponentPropsWithoutRef, ComponentType, ElementType, FunctionComponent } from 'react';

import { Children } from '@/src/generic/types/Children.type.ts';
import { LanguageProvider } from '@/src/generic/i18n/Language.provider.tsx';
import { ModeProvider } from '@/src/generic/mode/Mode.provider.tsx';
import { MenuProvider } from '@/src/generic/common/components/menu/Menu.provider.tsx';
import { NotificationsProvider } from '@/src/pages/game/components/notifications/Notifications.provider.tsx';
import { AlertsProvider } from '@/src/generic/common/components/alerts/Alerts.provider.tsx';

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
  [ModeProvider],
  [MenuProvider],
  [NotificationsProvider],
  [AlertsProvider],
]);
