import { Spinner } from '@/components/elements/spinner';
import { router } from '@/routes';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';

export const Shell = () => {
  return (
    <Suspense fallback={<Spinner fullScreen />}>
      <RouterProvider router={router} />
      <Toaster richColors />
    </Suspense>
  );
};
