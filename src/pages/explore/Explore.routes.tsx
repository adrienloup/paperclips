import { RouteObject } from 'react-router-dom';
import ExplorePage from '@/src/pages/explore/Explore.page.tsx';

export const ExploreRoutes: RouteObject[] = [
  { path: '/paperclips/explore', element: <ExplorePage /> },
  { path: '/paperclips/explore/*', element: <ExplorePage /> },
];
