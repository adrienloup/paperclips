import { ComponentPropsWithoutRef, ComponentType, ElementType, FunctionComponent } from 'react';

import { Children } from '@/src/generic/types/Children.type.ts';
import { AlertsProvider } from '@/src/generic/common/components/alerts/Alerts.provider.tsx';
import { CoinProvider } from '@/src/pages/game/components/dashboard/investments/coin/Coin.provider.tsx';
import { FeaturesProvider } from '@/src/pages/game/components/dashboard/features/Features.provider.tsx';
import { GameProvider } from '@/src/pages/game/Game.provider.tsx';
import { LanguageProvider } from '@/src/generic/i18n/Language.provider.tsx';
import { MenuProvider } from '@/src/generic/common/components/menu/Menu.provider.tsx';
import { ModeProvider } from '@/src/generic/mode/Mode.provider.tsx';
import { NoticesProvider } from '@/src/pages/game/components/dashboard/notices/Notices.provider.tsx';
import { ProjectsProvider } from '@/src/pages/game/components/dashboard/projects/Projects.provider.tsx';
import { StageProvider } from '@/src/generic/stage/Stage.provider.tsx';
import { ThemeProvider } from '@/src/generic/theme/Theme.provider.tsx';

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
  [CoinProvider],
  [FeaturesProvider],
  [GameProvider],
  [LanguageProvider],
  [MenuProvider],
  [ModeProvider],
  [NoticesProvider],
  [ProjectsProvider],
  [StageProvider],
  [ThemeProvider],
]);
