// Supabase configuration
const SUPABASE_URL = 'https://ncckinspwgaohkvctftx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jY2tpbnNwd2dhb2hrdmN0ZnR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MDA2NjUsImV4cCI6MjA4ODM3NjY2NX0.MGRuEgY9XJvtZtTuJfIjQ21-BGqcNcZ20GN3a6U7b0I';

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Session state
let currentEmployeeProfile = null;

// Auth UI helpers
function logout() {
    db.auth.signOut().then(() => {
        window.location.href = 'index.html';
    });
}

// Ensure accurate RBAC validation
async function checkRBAC(allowedRole) {
    const { data: { session }, error: sessionError } = await db.auth.getSession();

    if (sessionError || !session || !session.user) {
        window.location.href = 'index.html';
        return false;
    }

    // Fetch up-to-date role from database
    const { data: employee, error } = await db
        .from('employees')
        .select('*')
        .eq('auth_uid', session.user.id)
        .single();

    if (error || !employee) {
        // Fallback: If no auth_uid match, try matching on email
        const { data: fallbackEmployee } = await db
            .from('employees')
            .select('*')
            .eq('email', session.user.email)
            .single();

        if (fallbackEmployee) {
            currentEmployeeProfile = fallbackEmployee;
        } else {
            alert('Your user profile could not be found. Please contact support.');
            return false;
        }
    } else {
        currentEmployeeProfile = employee;
    }

    if (currentEmployeeProfile.role !== allowedRole) {
        alert(`🔐 RBAC ENFORCED: Access Denied.\n\nYour role is '${currentEmployeeProfile.role}', but this page requires '${allowedRole}' access.\nYou are being redirected.`);
        window.location.href = currentEmployeeProfile.role === 'hr' ? 'admin.html' : 'employee.html';
        return false;
    }

    return true;
}

// Expose profile fetching helper
function getSession() {
    return currentEmployeeProfile;
}

// Toast notifications
function showToast(message, type = 'default') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';
    toast.innerHTML = `<span>${icon}</span> ${message}`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3500);
}

// Get initials from name
function getInitials(name) {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

// Format date nicely
function formatDate(dateStr) {
    if (!dateStr) return '—';
    return new Date(dateStr).toLocaleDateString('en-GB', {
        day: 'numeric', month: 'short', year: 'numeric'
    });
}

function formatDateTime(dateStr) {
    if (!dateStr) return '—';
    return new Date(dateStr).toLocaleString('en-GB', {
        day: 'numeric', month: 'short', year: 'numeric',
        hour: '2-digit', minute: '2-digit'
    });
}
