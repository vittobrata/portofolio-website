// ---- Data (ubah di sini untuk memperbarui isi website) ----
const GITHUB_USER = 'vittobrata';

const skillGroups = [
  { title: 'Back-end', items: ['PHP', 'Laravel (MVC)', 'MySQL', 'SQL', 'phpMyAdmin'] },
  { title: 'Front-end', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite'] },
  { title: 'Tools & CMS', items: ['GitHub', 'WordPress', 'cPanel', 'Microsoft Excel'] },
  { title: 'Bahasa lain', items: ['Python', 'C++', 'C#'] }
];

const projects = [
  {
    title: 'Inventory & Sales Tracker',
    desc: 'Aplikasi pencatatan stok dan penjualan dengan dashboard laba, peringatan stok menipis, dan ekspor CSV.',
    tech: ['JavaScript', 'localStorage', 'CSS'],
    repo: 'inventory-sales-tracker'
  },
  {
    title: 'Service Status Tracker',
    desc: 'Cek status perbaikan berdasarkan nomor transaksi, lengkap dengan panel admin untuk memperbarui status.',
    tech: ['JavaScript', 'localStorage', 'CSS'],
    repo: 'service-status-tracker'
  },
  {
    title: 'Resale Margin Calculator',
    desc: 'Kalkulator harga jual dan margin untuk reseller, plus generator teks iklan produk siap salin.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    repo: 'resale-margin-calculator'
  }
];

// ---- Render ----
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

document.getElementById('skillGroups').innerHTML = skillGroups.map((g) => `
  <article class="card">
    <h3>${esc(g.title)}</h3>
    <div class="chips">${g.items.map((i) => `<span class="chip">${esc(i)}</span>`).join('')}</div>
  </article>`).join('');

document.getElementById('projectGrid').innerHTML = projects.map((p) => `
  <article class="card">
    <h3>${esc(p.title)}</h3>
    <p>${esc(p.desc)}</p>
    <div class="chips">${p.tech.map((t) => `<span class="chip">${esc(t)}</span>`).join('')}</div>
    <div class="links">
      <a href="https://${GITHUB_USER}.github.io/${esc(p.repo)}/" target="_blank" rel="noopener">Live demo</a>
      <a href="https://github.com/${GITHUB_USER}/${esc(p.repo)}" target="_blank" rel="noopener">Kode sumber</a>
    </div>
  </article>`).join('');

document.getElementById('year').textContent = new Date().getFullYear();

// ---- Tema gelap / terang ----
const root = document.documentElement;
const savedTheme = (() => { try { return localStorage.getItem('theme'); } catch (e) { return null; } })();
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
root.setAttribute('data-theme', savedTheme || (prefersDark ? 'dark' : 'light'));

document.getElementById('themeBtn').addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch (e) { /* abaikan */ }
});

// ---- Menu mobile ----
const menu = document.getElementById('menu');
const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});
menu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') { menu.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
});
