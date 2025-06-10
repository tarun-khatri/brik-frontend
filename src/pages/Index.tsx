
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Wallet, Vault } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen purple-gradient text-foreground relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-primary/30 rounded-full blur-lg animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-primary/15 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/0454b647-0064-402c-9f1f-6e2e9151a74a.png" 
            alt="Brik Logo" 
            className="w-10 h-10 object-contain"
          />
          <span className="text-2xl font-bold text-white">BRIK</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#why" className="text-white/80 hover:text-white transition-colors text-lg">
            Why Brik
          </a>
          <a href="#assets" className="text-white/80 hover:text-white transition-colors text-lg">
            Assets
          </a>
          <Button 
            onClick={() => navigate("/connect")}
            className="bg-primary text-white hover:bg-primary/90 px-6 py-3 text-lg font-semibold animate-glow"
          >
            Connect Wallet
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-white">
                The Future of Asset Ownership Is{" "}
                <span className="text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text animate-pulse">
                  On-Chain
                </span>
              </h1>
              <p className="text-2xl text-white/90 leading-relaxed max-w-2xl">
                Earn from real-world assets—tokenized, vault-secured, and 1:1 backed.
              </p>
            </div>
          </div>
          
          {/* Beautiful Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-yellow-400/30 to-yellow-600/20 rounded-full flex items-center justify-center glass animate-float">
                <div className="w-64 h-64 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl animate-glow">
                  <Vault className="w-32 h-32 text-yellow-100" />
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary rounded-full flex items-center justify-center animate-pulse glass">
                <span className="text-white font-bold text-2xl">$</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center animate-bounce glass">
                <span className="text-white font-bold text-xl">₿</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Beautiful Footer Features */}
        <div className="mt-32 flex flex-wrap justify-center gap-12 text-center">
          <div className="flex items-center gap-3 text-white/80 glass rounded-full px-6 py-3">
            <Shield className="w-6 h-6 text-primary" />
            <span className="text-lg font-medium">No KYC</span>
          </div>
          <div className="flex items-center gap-3 text-white/80 glass rounded-full px-6 py-3">
            <Clock className="w-6 h-6 text-primary" />
            <span className="text-lg font-medium">24/7 on-chain</span>
          </div>
          <div className="flex items-center gap-3 text-white/80 glass rounded-full px-6 py-3">
            <Wallet className="w-6 h-6 text-primary" />
            <span className="text-lg font-medium">Wallet-based</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
