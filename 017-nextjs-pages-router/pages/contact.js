import { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    //--- PREPARE DATA ---//
    const formData = new FormData(e.target);
    const contactData = Object.fromEntries(formData.entries());

    //--- POST ---//
    setIsSubmitting(true);
    const response = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(contactData) });
    setIsSubmitting(false);

    //--- GET RESULT ---//
    const { message, success } = await response.json();
    setMessage(message);
    setSuccess(success);
  }

  return (
    <div>
      <h1 className='mb-8 text-4xl font-medium text-accent-400'>Any question? Shoot us a message</h1>

      {success ? (
        <p className='text-center text-lg'>{message}</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className='mx-auto max-w-5xl space-y-6 bg-primary-900 px-14 py-10 text-lg'
        >
          <div className='space-y-2'>
            <label>Full name</label>
            <input
              required
              className='w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm'
              name='fullName'
            />
          </div>

          <div className='space-y-2'>
            <label>Email address</label>
            <input
              type='email'
              name='email'
              required
              className='w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm'
            />
          </div>

          <div className='space-y-2'>
            <label>Subject</label>
            <select
              required
              name='subject'
              className='w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm'
            >
              <option value=''>Select subject...</option>
              <option value='booking-enquiry'>Booking enquiry</option>
              <option value='cabin-information'>Cabin information</option>
              <option value='other'>Other</option>
            </select>
          </div>

          <div className='space-y-2'>
            <label>Message</label>
            <textarea
              name='message'
              className='w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm'
              rows={3}
            />
          </div>

          <div className='flex items-center justify-between text-red-500'>
            {!success && message ? <p>{message}</p> : <p></p>}

            <button
              disabled={isSubmitting}
              className='bg-accent-500 px-8 py-4 font-semibold text-primary-800 transition-all hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300'
            >
              {!isSubmitting ? 'Send message' : 'Submitting...'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
