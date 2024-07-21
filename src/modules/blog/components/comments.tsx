import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Comment = () => {
  return (
    <Card className="w-full  mt-4" key={Math.random()}>
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
      </CardHeader>
      <CardContent>
        <p>Отличная новость! Пошел играть!</p>
        <div className="pt-4 flex gap-3 items-center">
          <span className="text-primary cursor-pointer">Ответить</span>
          <span className="text-sm">2 ответа</span>
        </div>
      </CardContent>
    </Card>
  );
};
export const Comments = () => {
  return (
    <Card className="w-full border-2 mt-4" key={Math.random()}>
      <CardHeader className="gap-3">
        <CardTitle>22 комментария</CardTitle>
      </CardHeader>

      <CardContent className="w-full">
        <div className="grid w-full gap-1.5 ">
          <Label className="text-md" htmlFor="message">
            Ваш комментрий
          </Label>
          <Textarea
            className="text-md bg-gray-100"
            placeholder="Введите ваш комментарий"
            id="message"
          />
        </div>

        {Array(2)
          .fill('comment')
          .map(() => (
            <Comment />
          ))}
      </CardContent>
      <CardFooter className="flex justify-start gap-6"></CardFooter>
    </Card>
  );
};
