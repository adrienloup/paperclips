import { RouteObject } from 'react-router-dom';
import ExplorePage from '@/src/pages/explore/Explore.page.tsx';
import Stage1Page from '@/src/pages/explore/subpages/Stage1.page.tsx';

export const ExploreRoutes: RouteObject[] = [
  { path: '/paperclips/explore', element: <ExplorePage /> },
  { path: '/paperclips/explore/*', element: <ExplorePage /> },
  { path: '/paperclips/explore/stage1', element: <Stage1Page /> },
];
