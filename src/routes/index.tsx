import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '@/components/layouts/main-layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'feed',
        lazy: async () => {
          const { Feed } = await import('@/modules/blog');
          return { Component: Feed };
        },
      },
      {
        path: 'user',
        element: <>Users</>,
      },
      {
        path: 'notifications',
        element: <>Notifications</>,
      },
      {
        path: 'settings',
        element: <>Settings</>,
      },
    ],
  },
]);
