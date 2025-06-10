
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Info, ArrowDown } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Mint = () => {
  const navigate = useNavigate();
  const [usdcAmount, setUsdcAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const bgldAmount = usdcAmount ? parseFloat(usdcAmount).toFixed(4) : "0.00";

  const handleMint = async () => {
    if (!usdcAmount || parseFloat(usdcAmount) <= 0) return;
    
    setIsLoading(true);
    // Simulate minting process
    setTimeout(() => {
      setIsLoading(false);
      navigate("/success", { state: { amount: bgldAmount } });
    }, 3000);
  };

  return (
    <div className="min-h-screen purple-gradient text-foreground relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary/30 rounded-full blur-lg animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center gap-4 px-6 py-6 border-b border-white/10">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="p-2 text-white hover:bg-white/10"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-3xl font-bold text-white">Mint BGLD</h1>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-16 max-w-md">
        <Card className="glass border-white/20 p-8 space-y-6">
          <div className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="usdc" className="text-white text-lg font-medium">USDC Amount</Label>
              <Input
                id="usdc"
                type="number"
                placeholder="0.00 USDC"
                value={usdcAmount}
                onChange={(e) => setUsdcAmount(e.target.value)}
                className="text-lg h-16 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary"
              />
            </div>

            <div className="flex justify-center">
              <div className="w-12 h-12 glass rounded-full flex items-center justify-center border-white/20">
                <ArrowDown className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Label className="text-white text-lg font-medium">You'll receive</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="w-5 h-5 text-white/70" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-primary text-white">
                      <p>Vaulted 1:1 with real gold</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="glass border-white/20 rounded-lg p-4 text-xl font-semibold text-white">
                {bgldAmount} BGLD
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Button
              onClick={handleMint}
              disabled={!usdcAmount || parseFloat(usdcAmount) <= 0 || isLoading}
              className="w-full bg-primary text-white hover:bg-primary/90 h-16 text-xl font-semibold animate-glow"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Minting...
                </div>
              ) : (
                "Mint"
              )}
            </Button>
            
            <p className="text-sm text-white/70 text-center">
              Gas fee: 0.0005 ETH (est.)
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Mint;
