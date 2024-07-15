import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }: React.PropsWithChildren) => {
  const user = false;

  if (!user) <Navigate to={`/auth/sign-in`} replace />;

  return children;
};
