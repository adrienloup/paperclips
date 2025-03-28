import { ComponentPropsWithoutRef, ComponentType, ElementType, FunctionComponent } from 'react';

import { Children } from '@/src/generic/types/Children.type.ts';
import { LanguageProvider } from '@/src/generic/i18n/Language.provider.tsx';
import { ModeProvider } from '@/src/generic/mode/Mode.provider.tsx';
import { HeaderProvider } from '@/src/generic/common/components/header/Header.provider.tsx';
import { AlertProvider } from '@/src/generic/common/components/alert/Alert.provider.tsx';
import { GameProvider } from '@/src/pages/game/Game.provider.tsx';
import { NotificationProvider } from '@/src/pages/game/components/notification/Notification.provider.tsx';
import { FeaturesProvider } from '@/src/pages/game/components/features/Features.provider.tsx';

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

export const Provider: FunctionComponent<{ children: Children }> = allProviders([
  [LanguageProvider],
  [ModeProvider],
  [HeaderProvider],
  [AlertProvider],
  [GameProvider],
  [NotificationProvider],
  [FeaturesProvider],
]);
