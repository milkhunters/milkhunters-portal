import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Feed } from '@/modules/blog';
import { Settings } from 'lucide-react';

export const UserCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <Card className="w-full border-2 border-gray-200 border-none" key={Math.random()}>
      <CardHeader className="gap-3 border-2 rounded-lg">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex flex-col gap-1">
              <p className="text-md font-semibold">{id} gamer</p>
              <p className="text-sm text-gray-500 ">online</p>
            </div>
          </div>

          <Settings
            onClick={() => navigate('/settings')}
            size={24}
            className="hover:text-primary cursor-pointer"
          />
        </div>

        <CardDescription className="text-md">
          Глупо, когда у тебя есть шанс всё изменить, а ты боишься.
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-6 w-full px-0">
        <Feed />
      </CardContent>
      <CardFooter className="flex justify-start gap-6"></CardFooter>
    </Card>
  );
};
