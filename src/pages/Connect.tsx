
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
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="absolute top-6 left-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          
          <h1 className="text-3xl font-bold">Connect Your Wallet</h1>
          <p className="text-muted-foreground">Choose your preferred wallet to continue</p>
        </div>

        {/* Wallet Options */}
        <div className="space-y-4">
          <Card className="p-6 hover:bg-accent transition-colors cursor-pointer" onClick={() => handleConnect("metamask")}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">MetaMask</h3>
                <p className="text-sm text-muted-foreground">Connect using MetaMask wallet</p>
              </div>
              {connecting === "metamask" && (
                <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              )}
            </div>
          </Card>

          <Card className="p-6 hover:bg-accent transition-colors cursor-pointer" onClick={() => handleConnect("walletconnect")}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">WalletConnect</h3>
                <p className="text-sm text-muted-foreground">Connect using WalletConnect</p>
              </div>
              {connecting === "walletconnect" && (
                <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              )}
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4" />
            <span>No KYC</span>
            <span>·</span>
            <Wallet className="w-4 h-4" />
            <span>Wallet-based access only</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
