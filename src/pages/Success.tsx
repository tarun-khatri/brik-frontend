
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ExternalLink } from "lucide-react";

const Success = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const amount = location.state?.amount || "0.00";

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
      <div className="w-full max-w-md text-center space-y-8">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
            <Check className="w-10 h-10 text-primary-foreground" />
          </div>
        </div>

        {/* Success Message */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Success!</h1>
          <p className="text-xl text-muted-foreground">
            You've minted <span className="font-semibold text-foreground">{amount} BGLD</span>
          </p>
          <p className="text-muted-foreground">
            View your new BGLD in your wallet or mint more.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Button
            variant="outline"
            className="w-full h-12 text-lg"
            onClick={() => window.open("#", "_blank")}
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            View in Wallet
          </Button>
          
          <Button
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-lg"
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
            className="text-muted-foreground"
          >
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Success;
