import { cn } from '@/utils/cn';
import { Link } from 'react-router-dom';

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/feed" className={cn('text-3xl w-auto md:min-w-[222px] font-bold ', className)}>
      milk<span className="text-primary">hunters</span>
    </Link>
  );
}
