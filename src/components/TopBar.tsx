import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ConnectWalletButton } from './ConnectWalletButton';

const navItems = [
  { name: 'Trade', path: '/' },
  { name: 'Market News', path: '/news' },
  { name: 'Marketplace', path: '/marketplace' },
];

export function TopBar() {
  const location = useLocation();

  return (
    <div className="w-full h-16 purple-gradient border-b border-border px-8 flex items-center justify-between gap-6">
      <div className="flex items-center gap-8">
        <img src="/brik-logo.svg" alt="Brik" className="h-8" />
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              'px-4 py-2 rounded-lg text-lg font-medium transition-all duration-200 hover:bg-primary/30 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/40 scale-100 hover:scale-105',
              location.pathname === item.path && 'bg-primary/30 text-primary border border-primary/20'
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">BGLD</span>
          <span className="text-sm font-medium">$1.00</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">BSLV</span>
          <span className="text-sm font-medium">$1.00</span>
        </div>
        <div className="px-3 py-1.5 bg-muted/50 rounded-lg text-sm border border-border">
          Base
        </div>
        <div className="h-6 w-px bg-border" />
        <ConnectWalletButton />
      </div>
    </div>
  );
} 