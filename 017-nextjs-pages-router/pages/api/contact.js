import { supabase } from '@/lib/supabase';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Please send a post request' });
  }

  const contactData = JSON.parse(req.body);

  const { error } = await supabase.from('test').insert([contactData]);

  if (error) {
    //--- SUCCESS MESSAGE ---//
    return res.status(500).json({ success: false, message: 'Could not send message, try again' });
  }

  //--- SUCCESS MESSAGE ---//
  res.status(200).json({ success: true, message: 'Thank for your message' });
}
