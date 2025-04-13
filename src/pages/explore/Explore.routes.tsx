import { RouteObject } from 'react-router-dom';
import ExplorePage from '@/src/pages/explore/Explore.page.tsx';

export const ExploreRoutes: RouteObject[] = [
  { path: '/paperclip/explore', element: <ExplorePage /> },
  { path: '/paperclip/explore/*', element: <ExplorePage /> },
];
