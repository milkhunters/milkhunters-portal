import { Spinner } from '@/components/elements/spinner';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }: React.PropsWithChildren) => {
  const user = !false;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Spinner />;
  if (!user) return <Navigate to={`/auth/sign-in`} replace />;

  return children;
};
