import { useRoutes } from 'react-router-dom';
import { ExploreRoutes } from '@/src/page/explore/Explore.routes.tsx';
import { GameRoutes } from '@/src/page/game/Game.routes.tsx';

export const AppRoutes = () => {
  return useRoutes([...ExploreRoutes, ...GameRoutes]);
};
