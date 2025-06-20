import { SidebarNav } from './SidebarNav';
import { TopBar } from './TopBar';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <SidebarNav />
      <TopBar />
      <main className="pl-64 pt-16">
        <div className="container py-8">
          {children}
        </div>
      </main>
    </div>
  );
} 