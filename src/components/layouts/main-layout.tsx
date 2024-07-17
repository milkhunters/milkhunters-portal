import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Logo } from '../elements/logo';
import { useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/utils/cn';
import { cva } from 'class-variance-authority';
import { Bell, Home, Pencil, Search, Settings, User } from 'lucide-react';
import { ModeToggle } from '../elements/mode-toggle';

const ASIDE = [
  { title: 'Главная', to: '/feed', icon: <Home className="mr-3" /> },
  { title: 'Профиль', to: '/users/aibryx', icon: <User className="mr-3" /> },
  { title: 'Настройки', to: '/settings', icon: <Settings className="mr-3" /> },
];

const MOBILE_NAV_LOGOS = [
  { to: '/feed', icon: <Home /> },
  { to: '/users/aibryx', icon: <User /> },
  { to: '/search', icon: <Search /> },
  { to: '/notices', icon: <Bell /> },
  { to: '/settings', icon: <Settings /> },
];

export const MainLayout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const navigationMenuTriggerStyle = cva(
    'group inline-flex h-10 w-max items-center justify-center rounded-full  bg-background py-6 text-sm font-medium transition-colors hover:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50',
  );

  const user = !false;

  useEffect(() => {
    if (pathname === '/') navigate('/feed', { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div className="relative h-screen">
      <header className="py-4 flex justify-between items-center container">
        <Logo className="" />

        <div className="flex justify-between items-center gap-3 md:gap-8">
          <Search size={28} className="hidden md:flex hover:text-primary" />

          {user ? null : <ModeToggle />}

          {user ? (
            <>
              <Bell size={28} className="hidden md:flex hover:text-primary" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="w-11 h-11">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>aibryx</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      Профиль
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                      Настройки
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />

                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    Выйти
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <div className="flex gap-2">
              <Button onClick={() => navigate('/auth/sign-in')}>Войти</Button>
              <Button
                onClick={() => navigate('/auth/sign-up')}
                className="hidden md:inline-flex"
                variant="outline"
              >
                Зарегистрироваться
              </Button>
            </div>
          )}
        </div>
      </header>

      <main className="flex mt-1 justify-between items-start container main-h">
        <aside className="hidden md:flex flex-col justify-between h-full">
          <div>
            <ul>
              {ASIDE.map(({ title, to, icon }) => (
                <li key={to} className="my-1">
                  <NavLink
                    className={({ isActive }) =>
                      cn(
                        navigationMenuTriggerStyle(),
                        'text-xl w-full justify-start',
                        isActive ? 'text-primary' : '',
                      )
                    }
                    to={to}
                  >
                    {icon}
                    {title}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Button className="w-full	mt-4">
              <Pencil size={20} className="mr-4" /> Написать
            </Button>
          </div>
        </aside>

        <div className="w-full md:w-1/2 h-full overflow-y-auto scrollbar-hide">
          <Outlet />
        </div>

        <div className="hidden lg:flex justify-center items-center w-[320px] h-[400px] border-2 rounded-lg">
          Здесь могла быть ВАША реклама!
        </div>
      </main>

      <div className="flex md:hidden w-screen h-14 border-primary absolute bottom-0 shadow-t-2xl">
        <ul className="flex justify-around items-center w-full bg-slate-50 ">
          {MOBILE_NAV_LOGOS.map(({ to, icon }) => (
            <li key={to} className="flex justify-center items-center">
              <NavLink
                className={({ isActive }) => cn('text-sm w-full', isActive ? 'text-primary' : '')}
                to={to}
              >
                {icon}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
