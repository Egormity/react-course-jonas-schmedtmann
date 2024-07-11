import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { createOrder } from '../../services/apiRestaurant';
import Button from '../../ui/Button';
import { clearCart, getCart, getTotalCartPrice } from '../cart/cartSlice';
import EmptyCart from '../cart/EmptyCart';
import store from '../../store';
import { formatCurrency } from '../../utils/helpers';
import { useState } from 'react';
import { fetchAddress } from '../user/userSlice';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = str =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(str);

export default function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);

  const dispatch = useDispatch();
  const {
    username,
    error: addressError,
    status: addressStatus,
    position,
    address,
  } = useSelector(state => state.user);
  const isLoadingAddress = addressStatus === 'loading';

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const formErrors = useActionData();

  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  if (cart.length === 0) return <EmptyCart />;
  return (
    <div className='px-4 py-6'>
      <h2 className='mb-8 text-xl font-semibold'>Ready to order? Let's go!</h2>

      {/* <Form method='POST' action='/order/new'> */}
      <Form method='POST'>
        <div className='mb-6 grid grid-cols-[8rem_1fr] items-center gap-x-6 sm:grid-cols-1 sm:gap-y-1'>
          <label>First Name:</label>
          <div>
            <input
              defaultValue={username}
              className='input'
              type='text'
              name='customer'
              required
              placeholder='Your name'
            />
          </div>
        </div>

        <div className='mb-6 grid grid-cols-[8rem_1fr] items-center gap-x-6 sm:grid-cols-1 sm:gap-y-1'>
          <label>Phone number:</label>
          <div>
            <input className='input' type='tel' name='phone' required placeholder='Your number' />
          </div>
          {formErrors?.phone && (
            <p className='col-span-full mt-2 rounded-md bg-red-100 px-3 py-2 text-sm font-semibold text-red-600'>
              {formErrors.phone}
            </p>
          )}
        </div>

        <div className='relative mb-6 grid grid-cols-[8rem_1fr] items-center gap-x-6 sm:grid-cols-1 sm:gap-y-1'>
          <label>Address:</label>
          <div>
            <input
              className='input'
              type='text'
              name='address'
              required
              placeholder='Your address'
              defaultValue={address}
            />
          </div>
          {!position.latitude && (
            <span className='absolute right-[0.2rem] sm:top-[1.95rem] md:right-[.3rem] md:top-[2.05rem]'>
              <Button
                type='small'
                active={!isLoadingAddress || isSubmitting}
                onClick={e => {
                  e.preventDefault;
                  dispatch(fetchAddress());
                }}
              >
                Get Position
              </Button>
            </span>
          )}
          {addressStatus === 'error' && (
            <p className='col-span-full mt-2 rounded-md bg-red-100 px-3 py-2 text-sm font-semibold text-red-600'>
              {addressError}
            </p>
          )}
        </div>

        <div className='mb-12 flex items-center gap-4'>
          <input
            className='h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2'
            type='checkbox'
            name='priority'
            id='priority'
            value={withPriority}
            onChange={e => setWithPriority(e.target.checked)}
          />
          <label htmlFor='priority'>Want to yo give your order priority?</label>
        </div>

        <div>
          <input type='hidden' name='cart' value={JSON.stringify(cart)} />
          <input type='hidden' name='position' value={address} />
          <Button type='primary' active={!isLoadingAddress || isSubmitting}>
            {isSubmitting ? 'Placing order...' : `Order now for ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };

  const errors = {};
  if (!isValidPhone(order.phone)) errors.phone = 'Please input correct phone number';
  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  //--- DO NOT OVERUSE ---//
  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}
` `;
