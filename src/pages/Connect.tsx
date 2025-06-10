
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Shield, Wallet } from "lucide-react";

const Connect = () => {
  const navigate = useNavigate();
  const [connecting, setConnecting] = useState<string | null>(null);

  const handleConnect = async (walletType: string) => {
    setConnecting(walletType);
    // Simulate connection delay
    setTimeout(() => {
      setConnecting(null);
      navigate("/mint");
    }, 2000);
  };

  return (
    <div className="min-h-screen purple-gradient text-foreground flex items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary/30 rounded-full blur-lg animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="absolute top-6 left-6 text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          
          <h1 className="text-4xl font-bold text-white">Connect Your Wallet</h1>
          <p className="text-white/80 text-lg">Choose your preferred wallet to continue</p>
        </div>

        {/* Wallet Options */}
        <div className="space-y-4">
          <Card className="glass p-6 hover:bg-white/20 transition-all cursor-pointer border-white/20" onClick={() => handleConnect("metamask")}>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white text-lg">MetaMask</h3>
                <p className="text-sm text-white/70">Connect using MetaMask wallet</p>
              </div>
              {connecting === "metamask" && (
                <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              )}
            </div>
          </Card>

          <Card className="glass p-6 hover:bg-white/20 transition-all cursor-pointer border-white/20" onClick={() => handleConnect("walletconnect")}>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white text-lg">WalletConnect</h3>
                <p className="text-sm text-white/70">Connect using WalletConnect</p>
              </div>
              {connecting === "walletconnect" && (
                <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              )}
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-4 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>No KYC</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-2">
              <Wallet className="w-4 h-4" />
              <span>Wallet-based access only</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
