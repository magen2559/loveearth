// Supabase configuration
const SUPABASE_URL = 'https://ncckinspwgaohkvctftx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jY2tpbnNwd2dhb2hrdmN0ZnR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MDA2NjUsImV4cCI6MjA4ODM3NjY2NX0.MGRuEgY9XJvtZtTuJfIjQ21-BGqcNcZ20GN3a6U7b0I';

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Session helpers
function setSession(employee) {
  localStorage.setItem('onboarding_user', JSON.stringify(employee));
}
function getSession() {
  try { return JSON.parse(localStorage.getItem('onboarding_user')); }
  catch { return null; }
}
function clearSession() {
  localStorage.removeItem('onboarding_user');
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
