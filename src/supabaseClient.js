import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uvadtcyuckgqlmpnvmyr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2YWR0Y3l1Y2tncWxtcG52bXlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY3Nzc1NTIsImV4cCI6MjA4MjM1MzU1Mn0.EhdRrBPWjUiuNF_AyJ1oiMLmURgIHJMrrG2OdNxOLuw'
export const supabase = createClient(supabaseUrl, supabaseKey)