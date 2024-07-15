import { cn } from '@/utils/cn';
import { Link } from 'react-router-dom';

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/feed" className={cn('text-3xl font-semibold ', className)}>
      milkhunters
    </Link>
  );
}
