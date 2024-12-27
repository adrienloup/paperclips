import {
  ComponentPropsWithoutRef,
  ComponentType,
  ElementType,
  FunctionComponent,
} from 'react';

import { Children } from './generic/types/Children.type';
import { LanguageProvider } from './generic/i18n/Language.provider';
import { GameProvider } from './game/Game.provider';

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

export const Provider: FunctionComponent<{ children: Children }> = allProviders(
  [[LanguageProvider], [GameProvider]]
);
