const SUPABASE_URL = 'https://ncckinspwgaohkvctftx.supabase.co/rest/v1/employees';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jY2tpbnNwd2dhb2hrdmN0ZnR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MDA2NjUsImV4cCI6MjA4ODM3NjY2NX0.MGRuEgY9XJvtZtTuJfIjQ21-BGqcNcZ20GN3a6U7b0I';

async function seed() {
    console.log('Seeding missing users...');
    const users = [
        {
            name: 'David Chen',
            email: 'david@company.com',
            role: 'employee',
            start_date: '2026-03-01'
        },
        {
            name: 'Ivy Adams',
            email: 'ivy@company.com',
            role: 'hr',
            start_date: '2022-01-15'
        }
    ];

    const response = await fetch(SUPABASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify(users)
    });

    if (!response.ok) {
        console.error('Failed to insert users:', await response.text());
    } else {
        console.log('Successfully inserted users.');
    }
}

seed();
