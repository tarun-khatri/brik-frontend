
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Vault, ArrowRight, Shield, Clock, Wallet } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">B</span>
          </div>
          <span className="text-xl font-bold">Brik</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#why" className="text-muted-foreground hover:text-foreground transition-colors">
            Why Brik
          </a>
          <a href="#assets" className="text-muted-foreground hover:text-foreground transition-colors">
            Assets
          </a>
          <Button 
            onClick={() => navigate("/connect")}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Connect Wallet
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                The Future of Asset Ownership Is{" "}
                <span className="text-primary">On-Chain</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Earn from real-world assets—tokenized, vault-secured, and 1:1 backed.
              </p>
            </div>
            
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
              onClick={() => navigate("/connect")}
            >
              Get Early Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl">
                  <Vault className="w-24 h-24 text-yellow-100" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center animate-pulse">
                <span className="text-primary-foreground font-bold">$</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Teaser */}
        <div className="mt-24 flex flex-wrap justify-center gap-8 text-center">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-5 h-5" />
            <span>No KYC</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-5 h-5" />
            <span>24/7 on-chain</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Wallet className="w-5 h-5" />
            <span>Wallet-based</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
