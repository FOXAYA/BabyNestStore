import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jxraqumqdmzqrmbysfeg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4cmFxdW1xZG16cXJtYnlzZmVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0Mzk1NjQsImV4cCI6MjA1MzAxNTU2NH0.mwymitPtrP7Mt5pzmi0QfLlL8eIWSyin5Q_mZQS4zSI";

export const supabase = createClient(supabaseUrl, supabaseKey);
