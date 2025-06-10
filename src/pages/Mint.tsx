
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
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="flex items-center gap-4 px-6 py-4 border-b border-border">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="p-2"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-2xl font-bold">Mint BGLD</h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16 max-w-md">
        <Card className="p-8 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="usdc">USDC Amount</Label>
              <Input
                id="usdc"
                type="number"
                placeholder="0.00 USDC"
                value={usdcAmount}
                onChange={(e) => setUsdcAmount(e.target.value)}
                className="text-lg h-14"
              />
            </div>

            <div className="flex justify-center">
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                <ArrowDown className="w-5 h-5 text-muted-foreground" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label>You'll receive</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="w-4 h-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Vaulted 1:1 with real gold</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="bg-muted rounded-lg p-4 text-lg font-semibold">
                {bgldAmount} BGLD
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Button
              onClick={handleMint}
              disabled={!usdcAmount || parseFloat(usdcAmount) <= 0 || isLoading}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 text-lg"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  Minting...
                </div>
              ) : (
                "Mint"
              )}
            </Button>
            
            <p className="text-sm text-muted-foreground text-center">
              Gas fee: 0.0005 ETH (est.)
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Mint;
