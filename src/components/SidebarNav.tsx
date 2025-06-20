// import { Link, useLocation } from 'react-router-dom';
// import { cn } from '@/lib/utils';

// const navItems = [
//   { name: 'Trade', path: '/' },
//   { name: 'Market News', path: '/news' },
//   { name: 'Marketplace', path: '/marketplace' },
// ];

// export function TopNavbar() {
//   const location = useLocation();

//   return (
//     <nav className="w-full flex items-center justify-between px-8 py-4 purple-gradient text-foreground border-b border-border shadow-md">
//       <div className="flex items-center gap-8">
//         <img src="/brik-logo.svg" alt="Brik" className="h-8" />
//         {navItems.map((item) => (
//           <Link
//             key={item.path}
//             to={item.path}
//             className={cn(
//               'px-4 py-2 rounded-lg text-lg font-medium transition-all duration-200 hover:bg-primary/30 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/40 scale-100 hover:scale-105',
//               location.pathname === item.path && 'bg-primary/30 text-primary border border-primary/20'
//             )}
//           >
//             {item.name}
//           </Link>
//         ))}
//       </div>
//     </nav>
//   );
// } 