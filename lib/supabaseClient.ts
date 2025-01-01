import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cjrzpzawafiudegfzcbn.supabase.co"; // replace with your Supabase URL
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqcnpwemF3YWZpdWRlZ2Z6Y2JuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3MzI5ODEsImV4cCI6MjA1MTMwODk4MX0.tYE7pFDPWjNOC8uYrs7bvOwsvTd2W5IWUgJx1T-lPu8"; // replace with your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseKey);
