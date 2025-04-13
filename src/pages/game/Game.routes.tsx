import { RouteObject } from 'react-router-dom';
import GamePage from '@/src/pages/game/Game.page.tsx';

export const GameRoutes: RouteObject[] = [
  { path: '/paperclip', element: <GamePage /> },
  { path: '/paperclip/*', element: <GamePage /> },
];
