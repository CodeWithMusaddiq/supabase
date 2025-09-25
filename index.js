const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://zgrrjtsybrppvoyqekgu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpncnJqdHN5YnJwcHZveXFla2d1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3OTUwMDksImV4cCI6MjA3NDM3MTAwOX0.K4z2JdEzRCA0DzQAuNlQLh3hzdoHaACeCFM6CjgVfok'

const supabase = createClient(supabaseUrl, supabaseKey)

// Function to fetch all students
async function getAllStudents() {
    try {
        const { data, error } = await supabase
            .from('students')
            .select('*')
        
        if (error) {
            console.error('Error fetching students:', error)
            return
        }
        
        console.log('All Students:')
        console.table(data)
    } catch (err) {
        console.error('Unexpected error:', err)
    }
}

// Call the function
getAllStudents()