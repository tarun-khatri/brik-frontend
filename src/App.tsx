import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WalletProvider } from './lib/wallet';
//import { TopNavbar } from './components/SidebarNav';
import { TopBar } from './components/TopBar';
import { SwapWidget } from './components/SwapWidget';

function App() {
  return (
    <Router>
      <WalletProvider>
        <div className="min-h-screen w-full flex flex-col purple-gradient text-foreground">
          {/*<TopNavbar />*/}
          <TopBar />
          <div className="flex-1 flex items-center justify-center p-8">
            <Routes>
              <Route path="/" element={<SwapWidget />} />
            </Routes>
          </div>
        </div>
      </WalletProvider>
    </Router>
  );
}

export default App;
