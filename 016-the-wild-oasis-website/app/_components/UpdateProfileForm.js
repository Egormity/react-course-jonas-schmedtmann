import { updateGuestProfile } from '@/app/_lib/actions';
import SubmitButton from './SubmitButton';

export default function UpdateProfileForm({ children, guest }) {
  const { fullName, email, nationality, nationalID, countryFlag } = guest;

  return (
    <form action={updateGuestProfile} className='flex flex-col gap-6 bg-primary-900 px-12 py-8 text-lg'>
      <div className='space-y-2'>
        <label>Full name</label>
        <input
          disabled
          name='fullName'
          defaultValue={fullName}
          className='w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400'
        />
      </div>

      <div className='space-y-2'>
        <label>Email address</label>
        <input
          disabled
          name='email'
          defaultValue={email}
          className='w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400'
        />
      </div>

      <div className='space-y-2'>
        <div className='flex items-center justify-between'>
          <label htmlFor='nationality'>Where are you from?</label>
          <img src={countryFlag} alt='Country flag' className='h-5 rounded-sm' />
        </div>

        {children}
      </div>

      <div className='space-y-2'>
        <label htmlFor='nationalID'>National ID number</label>
        <input
          defaultValue={nationalID}
          name='nationalID'
          className='w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm'
        />
      </div>

      <div className='flex items-center justify-end gap-6'>
        <SubmitButton>Update Profile</SubmitButton>
      </div>
    </form>
  );
}
