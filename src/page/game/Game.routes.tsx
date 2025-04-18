import { RouteObject } from 'react-router-dom';
import GamePage from '@/src/page/game/Game.page.tsx';

export const GameRoutes: RouteObject[] = [
  { path: '/paperclips', element: <GamePage /> },
  { path: '/paperclips/*', element: <GamePage /> },
];
