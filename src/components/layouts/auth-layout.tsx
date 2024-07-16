import { cn } from '@/utils/cn';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { buttonVariants } from '../ui/button';
import { Logo } from '@/components/elements/logo';

const ROUTES = {
  SIGN_IN: '/auth/sign-in',
  SIGN_UP: '/auth/sign-up',
};

export const AuthLayout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          to={pathname === ROUTES.SIGN_IN ? ROUTES.SIGN_UP : ROUTES.SIGN_IN}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'absolute right-4 top-4 md:right-8 md:top-8',
          )}
        >
          {pathname === ROUTES.SIGN_IN ? 'Создать аккаунт' : 'Войти'}
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 lg:flex">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1562352157-a3b8c49fcabc?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              loading="lazy"
            />
          </div>
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Logo />
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full h-screen md:h-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                {pathname === ROUTES.SIGN_IN ? 'Войти в аккаунт' : 'Создать аккаунт'}
              </h1>
              <p className="text-sm text-muted-foreground">
                {pathname === ROUTES.SIGN_IN
                  ? 'Войдите в свой аккаунт для продолжения'
                  : 'Создайте свой аккаунт для продолжения'}
              </p>
            </div>
            {<Outlet />}
            <p className="px-8 text-center text-sm text-muted-foreground">
              Нажимая продолжить, вы соглашаетесь c нашими{' '}
              <Link to="/terms" className="underline underline-offset-4 hover:text-primary">
                Условиями использования
              </Link>{' '}
              и{' '}
              <Link to="/privacy" className="underline underline-offset-4 hover:text-primary">
                Политикой конфиденциальности
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
