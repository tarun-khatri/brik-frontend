
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ExternalLink } from "lucide-react";

const Success = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const amount = location.state?.amount || "0.00";

  return (
    <div className="min-h-screen purple-gradient text-foreground flex items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-primary/30 rounded-full blur-lg animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-primary/15 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 w-full max-w-md text-center space-y-8">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center animate-glow">
            <Check className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Success Message */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white">Success!</h1>
          <p className="text-2xl text-white/90">
            You've minted <span className="font-semibold text-yellow-400">{amount} BGLD</span>
          </p>
          <p className="text-white/70 text-lg">
            View your new BGLD in your wallet or mint more.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Button
            variant="outline"
            className="w-full h-14 text-lg glass border-white/20 text-white hover:bg-white/10"
            onClick={() => window.open("#", "_blank")}
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            View in Wallet
          </Button>
          
          <Button
            className="w-full bg-primary text-white hover:bg-primary/90 h-14 text-lg animate-glow"
            onClick={() => navigate("/mint")}
          >
            Mint More
          </Button>
        </div>

        {/* Return Home */}
        <div className="pt-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-white/70 hover:text-white hover:bg-white/10"
          >
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Success;
