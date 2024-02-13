
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://wagjeiefbwdvtwfxduig.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhZ2plaWVmYndkdnR3ZnhkdWlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc2MjE3OTUsImV4cCI6MjAyMzE5Nzc5NX0.vDFoylktGWaA-2pxW_05jZmTGLptnvyLVJVxeuFDSz8"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase