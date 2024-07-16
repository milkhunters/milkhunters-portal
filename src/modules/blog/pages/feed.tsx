import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

export const Feed = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      {Array(10)
        .fill('post')
        .map(() => {
          return (
            <Card className="w-full border-2" key={Math.random()}>
              <CardHeader className="gap-3">
                <div className="flex justify-start gap-4">
                  <Avatar className="w-11 h-11">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col gap-1">
                    <p className="text-md font-semibold">Shad</p>
                    <p className="text-sm text-gray-500">2 hours ago</p>
                  </div>
                </div>

                <CardTitle>
                  Аудитория Forza Horizon 5 достигла 40 миллионов игроков — почти за три года с
                  релиза
                </CardTitle>
                <CardDescription className="text-md">
                  Аркадная гонка добилась такого результата благодаря Game Pass.
                </CardDescription>
              </CardHeader>
              <CardContent className="">
                <img
                  src="https://leonardo.osnova.io/fb46f95a-d7eb-5edb-b75e-419d66b5ed08/-/preview/600x/-/format/webp"
                  alt="_"
                  className="rounded-lg"
                />
              </CardContent>
              <CardFooter className="flex justify-start gap-6">
                <div className="flex items-center gap-2 hover:text-primary cursor-pointer">
                  <Heart size={22} />
                  <span className="text-lg">12</span>
                </div>
                <div className="flex items-center gap-2 hover:text-primary cursor-pointer">
                  <MessageCircle size={22} />
                  <span className="text-lg">2</span>
                </div>
                <div className="flex items-center gap-2 hover:text-primary cursor-pointer">
                  <Share2 size={22} />
                </div>
              </CardFooter>
            </Card>
          );
        })}
    </div>
  );
};
