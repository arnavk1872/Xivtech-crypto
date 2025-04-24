
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { updatePrices } from '../store/cryptoSlice';
import { ChartLine, ArrowUp, ArrowDown } from 'lucide-react';
import { formatNumber, formatPercentage, formatSupply } from '../utils/priceUtils';

const CryptoTable = () => {
  const dispatch = useDispatch();
  const assets = useSelector((state: RootState) => state.crypto.assets);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updatePrices());
    }, 2000);

    return () => clearInterval(interval);
  }, [dispatch]);

  const getChangeColor = (value: number) => {
    return value >= 0 ? 'text-green-500' : 'text-red-500';
  };

  const isPositive = Math.random() > 0.5;

  const colorClass = isPositive ? "text-green-500" : "text-red-500";


  return (
    <div className="w-full overflow-x-auto font-poppins">
      <table className="w-full min-w-[1200px] border-collapse">
        <thead>
          <tr className="border-b border-gray-200 text-left">
            <th className="py-4 px-4 font-semibold text-gray-600">#</th>
            <th className="py-4 px-4 font-semibold text-gray-600">Name</th>
            <th className="py-4 px-4 font-semibold text-gray-600">Price</th>
            <th className="py-4 px-4 font-semibold text-gray-600">1h %</th>
            <th className="py-4 px-4 font-semibold text-gray-600">24h %</th>
            <th className="py-4 px-4 font-semibold text-gray-600">7d %</th>
            <th className="py-4 px-4 font-semibold text-gray-600">Market Cap</th>
            <th className="py-4 px-4 font-semibold text-gray-600">Volume(24h)</th>
            <th className="py-4 px-4 font-semibold text-gray-600">Circulating Supply</th>
            <th className="py-4 px-4 font-semibold text-gray-600">Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => (
            <tr key={asset.id} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-4 px-4 text-gray-600">{asset.id}</td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-2">
                  <img
                    src={asset.logo}
                    alt={asset.name}
                    className="w-6 h-6"
                  />
                  <span className="font-medium">{asset.name}</span>
                  <span className="text-gray-500">{asset.symbol}</span>
                </div>
              </td>
              <td className="py-4 px-4 font-medium">
                {formatNumber(asset.price)}
              </td>
              <td className={`py-4 px-4 ${getChangeColor(asset.change1h)}`}>
                <div className="flex items-center gap-1">
                  {asset.change1h >= 0 ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                  {formatPercentage(asset.change1h)}
                </div>
              </td>
              <td className={`py-4 px-4 ${getChangeColor(asset.change24h)}`}>
                <div className="flex items-center gap-1">
                  {asset.change24h >= 0 ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                  {formatPercentage(asset.change24h)}
                </div>
              </td>
              <td className={`py-4 px-4 ${getChangeColor(asset.change7d)}`}>
                <div className="flex items-center gap-1">
                  {asset.change7d >= 0 ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                  {formatPercentage(asset.change7d)}
                </div>
              </td>
              <td className="py-4 px-4">{formatNumber(asset.marketCap)}</td>
              <td className="py-4 px-4">{formatNumber(asset.volume24h)}</td>
              <td className="py-4 px-4">
                {formatSupply(asset.circulatingSupply)} {asset.symbol}
              </td>
              <td className="py-4 px-4">
                <ChartLine className={`w-[100px] h-[40px] ${colorClass}`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
