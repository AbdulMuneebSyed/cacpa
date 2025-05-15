import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://brfbhphjfbqfbywcumsv.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyZmJocGhqZmJxZmJ5d2N1bXN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3ODIxNDYsImV4cCI6MjA2MjM1ODE0Nn0.xwP6qmOsCnFBvWgNdcg1qed9v7PVf5oSm3ueYuf7JMA";

export const supabase = createClient(supabaseUrl, supabaseKey);
