
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { generateRandomPriceChange } from '../utils/priceUtils';

export interface CryptoAsset {
  id: number;
  name: string;
  symbol: string;
  logo: string;
  price: number;
  change1h: number;
  change24h: number;
  change7d: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  maxSupply: number | null;
}

interface CryptoState {
  assets: CryptoAsset[];
  loading: boolean;
  error: string | null;
}

const initialState: CryptoState = {
  assets: [
    {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      logo: "/crypto-icons/btc.svg",
      price: 93759.48,
      change1h: 0.43,
      change24h: 0.93,
      change7d: 11.11,
      marketCap: 1861618902186,
      volume24h: 43874950947,
      circulatingSupply: 19.85,
      maxSupply: 21,
    },
    {
      id: 2,
      name: "Ethereum",
      symbol: "ETH",
      logo: "/crypto-icons/eth.svg",
      price: 1802.46,
      change1h: 0.60,
      change24h: 3.21,
      change7d: 13.68,
      marketCap: 217581279327,
      volume24h: 23547469307,
      circulatingSupply: 120.71,
      maxSupply: null,
    },
    {
      id: 3,
      name: "Tether",
      symbol: "USDT",
      logo: "/crypto-icons/usdt.svg",
      price: 1.00,
      change1h: 0.00,
      change24h: 0.00,
      change7d: 0.04,
      marketCap: 145320022085,
      volume24h: 92288882007,
      circulatingSupply: 145.27,
      maxSupply: null,
    },
    {
      id: 4,
      name: "XRP",
      symbol: "XRP",
      logo: "/crypto-icons/xrp.svg",
      price: 2.22,
      change1h: 0.46,
      change24h: 0.54,
      change7d: 6.18,
      marketCap: 130073814966,
      volume24h: 5131481491,
      circulatingSupply: 58.39,
      maxSupply: 100,
    },
    {
      id: 5,
      name: "BNB",
      symbol: "BNB",
      logo: "/crypto-icons/bnb.svg",
      price: 606.65,
      change1h: 0.09,
      change24h: -1.20,
      change7d: 3.73,
      marketCap: 85471956947,
      volume24h: 1874281784,
      circulatingSupply: 140.89,
      maxSupply: 200,
    },
  ],
  loading: false,
  error: null,
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updatePrices: (state) => {
      state.assets = state.assets.map(asset => ({
        ...asset,
        price: asset.price * (1 + generateRandomPriceChange()),
        change1h: asset.change1h + generateRandomPriceChange(),
        change24h: asset.change24h + generateRandomPriceChange(),
        volume24h: asset.volume24h * (1 + generateRandomPriceChange()),
      }));
    },
  },
});

export const { updatePrices } = cryptoSlice.actions;
export default cryptoSlice.reducer;
