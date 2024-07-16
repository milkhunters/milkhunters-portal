import { Spinner } from '@/components/elements/spinner';
import { ThemeProvider } from '@/components/layouts/theme-provider';
import { router } from '@/routes';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';

export const Shell = () => {
  return (
    <Suspense fallback={<Spinner fullScreen />}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        <Toaster richColors />
      </ThemeProvider>
    </Suspense>
  );
};
