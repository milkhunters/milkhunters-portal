import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

export const Settings = () => {
  const [name, setName] = useState('aibryx');
  const [email, setEmail] = useState('aibryx@mlkh.ru');
  const [password, setPassword] = useState('');

  return (
    <Card className="w-full border-2" key={Math.random()}>
      <CardHeader className="gap-3">
        <CardTitle>Настройки</CardTitle>
        <CardDescription className="text-md">Ваши персональные настройки</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-8">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="picture">Фото профиля</Label>
          <Input id="picture" type="file" />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">Имя</Label>
          <Input
            type="email"
            id="email"
            placeholder="Новое имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">Электронная почта</Label>
          <Input
            type="email"
            id="email"
            placeholder="Новый адрес"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="grid w-full  items-center gap-1.5">
          <Label htmlFor="email">Пароль</Label>
          <Input
            type="email"
            id="email"
            placeholder="Новый пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button>Сохранить</Button>
      </CardContent>
      <CardFooter className="flex justify-start gap-6"></CardFooter>
    </Card>
  );
};
