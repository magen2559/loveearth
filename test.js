const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

async function go() {
    const f = fs.readFileSync('supabase.js', 'utf8');
    const urlMatch = f.match(/const supabaseUrl = ['"]([^'"]+)['"]/);
    const keyMatch = f.match(/const supabaseAnonKey = ['"]([^'"]+)['"]/);
    const supabase = createClient(urlMatch[1], keyMatch[1]);

    const r1 = await supabase.from('employees').select('*').eq('role', 'employee');
    console.log("Employees Data:", r1.data?.length, "Error:", r1.error);

    if (r1.error) console.error(r1.error);

    const r2 = await supabase.from('tasks').select('*');
    console.log("Tasks Data:", r2.data?.length, "Error:", r2.error);
}

go();
