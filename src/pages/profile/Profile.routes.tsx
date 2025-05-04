import { RouteObject } from 'react-router-dom';
import ProfilePage from '@/src/pages/profile/Profile.page.tsx';

export const ProfileRoutes: RouteObject[] = [
  { path: '/paperclips/profile', element: <ProfilePage /> },
  { path: '/paperclips/profile/*', element: <ProfilePage /> },
];
