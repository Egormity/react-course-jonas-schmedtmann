import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './loader';
import { useSelector } from 'react-redux';
import { getCart } from '../features/cart/cartSlice';

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  const cart = useSelector(getCart);

  return (
    <div className='grid h-screen grid-rows-[auto_1fr_auto]'>
      {isLoading && <Loader />}

      <Header />

      <div className='overflow-y-scroll bg-stone-100'>
        <main className='mx-auto max-w-3xl'>
          <Outlet />
        </main>
      </div>

      {cart.length !== 0 && <CartOverview />}
    </div>
  );
}
