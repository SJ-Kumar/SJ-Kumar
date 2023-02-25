import { createClient } from '@supabase/supabase-js'

// Initialize the client
const supabaseUrl = 'https://sofhuslgjpomkjgknlzq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvZmh1c2xnanBvbWtqZ2tubHpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzczMzMwODUsImV4cCI6MTk5MjkwOTA4NX0.2oy9EPgtX6AXoDzaPOzj6GLliXFOZc8sDb6WG2716vQ'
const supabase = createClient(supabaseUrl, supabaseKey)

// Sign in the user
const email = 'user@example.com'
const password = 'password123'
const { user, session, error } = await supabase.auth.signIn({
  email: email,
  password: password,
})

if (error) {
  console.error(error)
} else {
  console.log(user)
  console.log(session)
}
