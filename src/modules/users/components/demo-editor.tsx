import { Card, CardHeader } from '@/components/ui/card';
import { BadgePlus } from 'lucide-react';

export const DemoEditor = () => {
  return (
    <Card
      className="w-full border-2 border-gray-200 border-none mt-4 cursor-pointer"
      key={Math.random()}
    >
      <CardHeader className="gap-3 border-2 rounded-lg py-3 px-4 ">
        <div className="flex justify-between hover:bg-gray-100 rounded-lg p-2">
          <div className="flex items-center gap-4">
            <BadgePlus size={35} className="hover:text-primary cursor-pointer text-primary" />

            <div className="flex flex-col gap-1">
              <p className="text-md font-semibold">Создать пост</p>
              <p className="text-sm text-gray-500 ">Поделитесь свой историей... </p>
            </div>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};
