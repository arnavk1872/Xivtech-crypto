
import { Provider } from 'react-redux';
import { store } from '../store/store';
import CryptoTable from '../components/CryptoTable';

const Index = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-white p-4 md:p-8">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-3xl font-semibold mb-8 font-poppins">Cryptocurrency Prices</h1>
          <CryptoTable />
        </div>
      </div>
    </Provider>
  );
};

export default Index;
