import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '@/components/layouts/main-layout';
import { AuthLayout } from '@/components/layouts/auth-layout';
import { ProtectedRoute } from './protected-route';

export const router = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'sign-in',
        lazy: async () => {
          const { SignInPage } = await import('@/modules/auth');
          return { Component: SignInPage };
        },
      },
      {
        path: 'sign-up',
        lazy: async () => {
          const { SignUpPage } = await import('@/modules/auth');
          return { Component: SignUpPage };
        },
      },
    ],
  },
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
        path: 'users/:id',
        lazy: async () => {
          const { UserCard } = await import('@/modules/users');

          return {
            Component: UserCard,
          };
        },
      },
      {
        path: 'settings',
        lazy: async () => {
          const { Settings } = await import('@/modules/users');

          return {
            Component: () => (
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            ),
          };
        },
      },
    ],
  },
]);
