import { ComponentPropsWithoutRef, ComponentType, ElementType, FunctionComponent } from 'react';

import { Children } from './generic/types/Children.type';
import { DashboardProvider } from './game/components/dashboard/Dashboard.provider';
import { ProjectsProvider } from './game/components/projects/Projects.provider';

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

export const Provider: FunctionComponent<{ children: Children }> = allProviders([[DashboardProvider], [ProjectsProvider]]);
