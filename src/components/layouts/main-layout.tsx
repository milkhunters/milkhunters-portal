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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/utils/cn';
import { cva } from 'class-variance-authority';
import { Bell, Home, PencilIcon, PencilLineIcon, Search, Settings, User } from 'lucide-react';
import { ModeToggle } from '../elements/mode-toggle';
import { SuperEditor } from '@/modules/blog';

const NAV = [
  { title: 'Главная', to: '/feed', icon: <Home size={28} /> },
  { title: 'Профиль', to: '/users/aibryx', icon: <User size={28} /> },
  { title: 'Настройки', to: '/settings', icon: <Settings size={28} /> },
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
    <div className="relative h-screen bg-gray-50 dark:bg-[#020818]">
      <header className="border-b-2 bg-white dark:bg-[#020818]">
        <div className="py-3 flex justify-between items-center rounded-full container">
          <Logo />

          <div className="flex gap-2 hidden md:flex">
            {NAV.map(({ to, icon }) => {
              return !user && to !== '/feed' ? null : (
                <NavLink
                  key={to}
                  className={({ isActive }) =>
                    cn(
                      navigationMenuTriggerStyle(),
                      'w-full justify-start px-8 hover:bg-accent/100',
                      isActive
                        ? 'text-primary border-b-2 rounded-none border-primary hover:bg-parrent'
                        : null,
                    )
                  }
                  to={to}
                >
                  {icon}
                </NavLink>
              );
            })}
          </div>

          <div className="flex justify-between items-center gap-3 md:gap-8">
            <Search size={28} className="hidden md:flex hover:text-primary" />

            {user ? null : <ModeToggle />}

            {user ? (
              <>
                <Bell size={28} className="hidden md:flex hover:text-primary" />

                <Dialog>
                  <DialogTrigger>
                    <PencilLineIcon size={26} className="hidden md:flex hover:text-primary" />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Поделитесь своей историей</DialogTitle>
                    </DialogHeader>
                    <SuperEditor />
                  </DialogContent>
                </Dialog>
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
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="flex	justify-center items-center container main-h">
        <div className="w-full md:w-1/2 h-full overflow-y-auto scrollbar-hide">
          <Outlet />
        </div>
      </main>

      <div className="flex md:hidden w-12 h-12 bg-primary rounded-full fixed bottom-16 right-4 items-center justify-center">
        <PencilIcon size={22} className="text-white" />
      </div>

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
