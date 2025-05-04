import { useRoutes } from 'react-router-dom';
import { ExploreRoutes } from '@/src/pages/explore/Explore.routes.tsx';
import { GameRoutes } from '@/src/pages/game/Game.routes.tsx';
import { ProfileRoutes } from '@/src/pages/profile/Profile.routes.tsx';

export const AppRoutes = () => {
  return useRoutes([...ExploreRoutes, ...GameRoutes, ...ProfileRoutes]);
};
