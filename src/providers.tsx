import { ComponentPropsWithoutRef, ComponentType, ElementType, FunctionComponent } from 'react';

import { Children } from '@/src/generic/types/Children.type.ts';
import { AlertsProvider } from '@/src/generic/common/components/alerts/Alerts.provider.tsx';
import { ExchangeProvider } from '@/src/pages/game/components/dashboard/investments/exchange/Exchange.provider.tsx';
import { GameProvider } from '@/src/pages/game/Game.provider.tsx';
import { MenuProvider } from '@/src/generic/common/components/menu/Menu.provider.tsx';
// import { NoticesProvider } from '@/src/pages/game/components/dashboard/notices/Notices.provider.tsx';
import { SettingsProvider } from '@/src/generic/common/components/settings/Settings.provider.tsx';
import { TimeProvider } from '@/src/pages/profile/components/time/Time.provider.tsx';

type ProvidersType = [ComponentType<{ children: Children }>, ComponentPropsWithoutRef<ElementType>?][];

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

export const Providers: FunctionComponent<{ children: Children }> = allProviders([
  [AlertsProvider],
  [ExchangeProvider],
  [GameProvider],
  [MenuProvider],
  // [NoticesProvider],
  [SettingsProvider],
  [TimeProvider],
]);
