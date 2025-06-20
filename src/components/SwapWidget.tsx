import React, { useState, useEffect } from 'react';
import { useAppKitAccount, useAppKitProvider, useAppKitNetworkCore } from '@reown/appkit/react';
import { BrowserProvider, formatEther, Contract } from 'ethers';

// ERC20 ABI for balanceOf
const ERC20_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)"
];

// Token list (add icons in /public as needed)
const TOKENS = [
  { symbol: 'USDC', name: 'USD Coin', icon: '/usdc.svg', isNative: false, address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', decimals: 6 }, // Mainnet USDC
  { symbol: 'USDT', name: 'Tether', icon: '/usdt.svg', isNative: false, address: '0xdAC17F958D2ee523a2206206994597C13D831ec7', decimals: 6 }, // Mainnet USDT
  { symbol: 'BGLD', name: 'Brik Gold', icon: '/bgld.svg', isNative: false, address: '0x...', decimals: 6 },
  { symbol: 'BGLV', name: 'Brik Silver', icon: '/bglv.svg', isNative: false, address: '0x...', decimals: 6 },
];

function formatAmount(val: string | number, decimals = 2) {
  if (!val || isNaN(Number(val))) return '0.00';
  return Number(val).toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

// Fetch ERC20 balance
async function getERC20Balance(address: string, tokenAddress: string, provider: any, decimals: number) {
  try {
    const contract = new Contract(tokenAddress, ERC20_ABI, provider);
    const bal = await contract.balanceOf(address);
    return (Number(bal) / 10 ** decimals).toString();
  } catch {
    return '0';
  }
}

export function SwapWidget() {
  const { address, isConnected } = useAppKitAccount();
  const { walletProvider } = useAppKitProvider('eip155');
  const { chainId } = useAppKitNetworkCore();

  const [sellToken, setSellToken] = useState(TOKENS[0]);
  const [buyToken, setBuyToken] = useState(TOKENS[1]);
  const [sellAmount, setSellAmount] = useState('');
  const [sellBalance, setSellBalance] = useState('0');
  const [buyBalance, setBuyBalance] = useState('0');
  const [loading, setLoading] = useState(false);

  // Fetch balances
  useEffect(() => {
    if (!isConnected || !address || !walletProvider) return;
    const fetchBalances = async () => {
      setLoading(true);
      const provider = new BrowserProvider(walletProvider as any, chainId);
      // Sell token balance
      setSellBalance(await getERC20Balance(address, sellToken.address, provider, sellToken.decimals));
      // Buy token balance
      setBuyBalance(await getERC20Balance(address, buyToken.address, provider, buyToken.decimals));
      setLoading(false);
    };
    fetchBalances();
  }, [isConnected, address, walletProvider, chainId, sellToken, buyToken]);

  // Fix: canSwap should be true if amount is valid, >0, <= balance, and tokens are different
  const validAmount = sellAmount && !isNaN(Number(sellAmount)) && Number(sellAmount) > 0;
  const canSwap = isConnected && validAmount && sellToken.symbol !== buyToken.symbol;
  const buyAmount = sellAmount;

  function handleSwitch() {
    setSellToken(buyToken);
    setBuyToken(sellToken);
    setSellAmount('');
  }

  function handleSellTokenChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const token = TOKENS.find(t => t.symbol === e.target.value)!;
    if (token.symbol === buyToken.symbol) handleSwitch();
    else setSellToken(token);
    setSellAmount('');
  }

  function handleBuyTokenChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const token = TOKENS.find(t => t.symbol === e.target.value)!;
    if (token.symbol === sellToken.symbol) handleSwitch();
    else setBuyToken(token);
    setSellAmount('');
  }

  function handleAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value.replace(/[^0-9.]/g, '');
    setSellAmount(val);
  }

  function handleHalf() {
    setSellAmount((Number(sellBalance) / 2).toString());
  }

  function handleMax() {
    setSellAmount(sellBalance);
  }

  function handleSwap() {
    // Mock swap
    alert(`Mock swap: ${sellAmount} ${sellToken.symbol} → ${buyToken.symbol}`);
    setSellAmount('');
  }

  return (
    <div className="w-full max-w-md mx-auto p-4 rounded-2xl shadow-2xl border-2" style={{borderColor:'#ffd035', background: 'rgba(30, 0, 60, 0.7)', backdropFilter: 'blur(16px)'}}>
      {/* Hide number input spinners */}
      <style>{`
        input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
        input[type=number] { -moz-appearance: textfield; }
      `}</style>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white drop-shadow-lg">Swap</h2>
          {isConnected && (
            <span className="text-sm text-gold font-semibold" style={{color:'#ffd035'}}>{address?.slice(0, 6)}...{address?.slice(-4)}</span>
          )}
        </div>
        {/* Selling Panel */}
        <div className="bg-[rgba(60,0,120,0.5)] rounded-xl p-4 mb-2 border border-[--gold]">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-white/80 font-semibold">Selling</span>
            <span className="text-xs text-white/60">
              {formatAmount(sellBalance, sellToken.decimals)} {sellToken.symbol} <button onClick={handleHalf} className="ml-2 px-2 py-0.5 text-xs rounded bg-gold/10 hover:bg-gold/30 hover:text-gold transition-all duration-200 scale-100 hover:scale-105" style={{background:'#ffd03522',color:'#ffd035'}}>HALF</button> <button onClick={handleMax} className="ml-1 px-2 py-0.5 text-xs rounded bg-gold/10 hover:bg-gold/30 hover:text-gold transition-all duration-200 scale-100 hover:scale-105" style={{background:'#ffd03522',color:'#ffd035'}}>MAX</button>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-[rgba(80,0,160,0.3)] rounded px-3 py-2 border border-[--gold]">
              <img src={sellToken.icon} alt={sellToken.symbol} className="w-6 h-6" />
              <span className="font-semibold text-white">{sellToken.symbol}</span>
              <span className="text-xs text-white/60">{sellToken.name}</span>
            </div>
            <select value={sellToken.symbol} onChange={handleSellTokenChange} className="bg-[rgba(80,0,160,0.3)] text-white rounded px-2 py-2 focus:outline-none hover:bg-gold/10 border border-[--gold] transition-all duration-200 scale-100 hover:scale-105">
              {TOKENS.filter(t => t.symbol !== buyToken.symbol).map(token => (
                <option key={token.symbol} value={token.symbol}>{token.symbol}</option>
              ))}
            </select>
            <input
              type="number"
              min="0"
              step="any"
              placeholder="0.00"
              value={sellAmount}
              onChange={handleAmountChange}
              className="flex-1 bg-transparent text-2xl text-white outline-none px-2 font-mono"
              disabled={!isConnected}
            />
          </div>
        </div>
        {/* Swap Button */}
        <div className="flex justify-center my-2">
          <button onClick={handleSwitch} className="rounded-full bg-gradient-to-b from-gold to-primary p-3 border-2 border-[--gold] shadow-lg hover:scale-110 hover:from-[#ffdd23] hover:to-[#e0aa08] transition-transform animate-glow" style={{background:'linear-gradient(180deg,#ffd035 0%,#6107e0 100%)',borderColor:'#ffd035'}}>
            {/* Vertical double arrow icon */}
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 5v14M12 5l-4 4M12 5l4 4M12 19l-4-4M12 19l4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
        {/* Buying Panel */}
        <div className="bg-[rgba(60,0,120,0.5)] rounded-xl p-4 mb-2 border border-[--gold]">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-white/80 font-semibold">Buying</span>
            <span className="text-xs text-white/60">{formatAmount(buyBalance, buyToken.decimals)} {buyToken.symbol}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-[rgba(80,0,160,0.3)] rounded px-3 py-2 border border-[--gold]">
              <img src={buyToken.icon} alt={buyToken.symbol} className="w-6 h-6" />
              <span className="font-semibold text-white">{buyToken.symbol}</span>
              <span className="text-xs text-white/60">{buyToken.name}</span>
            </div>
            <select value={buyToken.symbol} onChange={handleBuyTokenChange} className="bg-[rgba(80,0,160,0.3)] text-white rounded px-2 py-2 focus:outline-none hover:bg-gold/10 border border-[--gold] transition-all duration-200 scale-100 hover:scale-105">
              {TOKENS.filter(t => t.symbol !== sellToken.symbol).map(token => (
                <option key={token.symbol} value={token.symbol}>{token.symbol}</option>
              ))}
            </select>
            <input
              type="text"
              value={buyAmount ? formatAmount(buyAmount, buyToken.decimals) : ''}
              readOnly
              className="flex-1 bg-transparent text-2xl text-white outline-none px-2 font-mono"
            />
          </div>
        </div>
        {/* Swap Button */}
        {isConnected ? (
          <button
            className={`w-full py-3 rounded-lg font-semibold text-lg transition-all duration-200 bg-gradient-to-r from-gold to-primary text-white shadow-xl border-2 border-[--gold] animate-glow scale-100 hover:scale-105 hover:from-[#ffdd23] hover:to-[#e0aa08]`}
            style={{background:'linear-gradient(90deg,#ffd035 0%,#6107e0 100%)',borderColor:'#ffd035'}}
            disabled={!canSwap}
            onClick={handleSwap}
          >
            {canSwap ? 'Swap' : 'Enter an amount'}
          </button>
        ) : (
          <div className="w-full py-3 rounded-lg font-semibold text-lg bg-muted text-muted-foreground text-center cursor-pointer">
            Connect your wallet
          </div>
        )}
      </div>
    </div>
  );
}