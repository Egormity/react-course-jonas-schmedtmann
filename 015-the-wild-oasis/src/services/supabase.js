import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://tqlpeeginxvocmwxjcur.supabase.co';

const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxbHBlZWdpbnh2b2Ntd3hqY3VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEwMjAwODMsImV4cCI6MjAzNjU5NjA4M30.rIVhC6DgZbsRatBCWhiIGDi31lL7PT9x_LOc2SOJ88A`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
