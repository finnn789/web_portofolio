// Language switch: the page is written in English; Indonesian replaces each [data-i18n] text.
const id = {
  skip: 'Langsung ke konten',
  'nav.work': 'Karya', 'nav.about': 'Pengalaman', 'nav.stack': 'Stack',
  'menu.app': 'Aplikasinya', 'menu.app.l': 'Pesanan, pembayaran dan dapur',
  'menu.backend': 'Backend-nya', 'menu.backend.l': 'Spring Boot, PostgreSQL, tenant',
  'menu.agent': 'Agent-nya', 'menu.agent.l': 'Telegram, LangGraph dan gRPC',
  'menu.tools': 'Tools', 'menu.mcp.l': 'MCP server untuk CV ATS',
  'menu.stack': 'Stack', 'menu.stack.l': 'Yang saya pakai setiap hari',
  cta: 'Unduh CV',
  'hero.pill': 'Terbuka untuk kerja',
  'hero.h1': 'Muhammad Arifin, AI agent engineer',
  'hero.lead': 'Saya membangun AI agent beserta backend Java yang dibacanya. KedaiMbo, aplikasi kasir saya untuk coffee shop, berjalan di atas 70 endpoint REST dan menjawab pelanggan lewat Telegram.',
  'hero.see': 'Lihat KedaiMbo',
  'hero.win': 'Bot Telegram KedaiMbo menjawab pelanggan soal menu minuman',
  'k.h': 'KedaiMbo, aplikasi kasir untuk coffee shop',
  'k.p': 'Kasir mencatat pesanan, pelanggan bayar dulu, lalu dapur menyiapkannya. Setiap pembayaran lewat service Spring Boot seperti yang terbuka di bawah.',
  'k.link': 'Baca kodenya di GitHub',
  'k.win': 'Daftar pesanan KedaiMbo di samping service Java yang memproses pembayaran',
  'b.h': 'Backend KedaiMbo dalam angka',
  'b.r1': 'Setiap pembayaran tercatat sekali', 'b.r1p': 'Request ulang dengan Idempotency-Key yang sama mengembalikan pembayaran pertama.',
  'b.r2': 'Data tiap toko terpisah', 'b.r2p': 'Tenant diambil dari token yang ditandatangani. Data toko lain dijawab 404.',
  'b.r4': 'Selesai dalam satu transaksi', 'b.r4p': 'Pembayaran, catatan audit dan status meja ditulis bersamaan, atau tidak sama sekali.',
  'b.r3': 'Refresh token selalu dirotasi', 'b.r3p': 'Disimpan sebagai digest SHA-256. Token yang dipakai ulang mengakhiri sesi.',
  'b.s1': 'endpoint REST di 20 controller', 'b.s2': 'role staf',
  'b.s3': 'migrasi Flyway', 'b.s4': 'menit per access token',
  'a.h': 'Agent Telegram yang membaca KedaiMbo lewat gRPC',
  'a.p': 'Pelanggan bertanya ke bot soal menu atau pesanannya. Service Python dengan FastAPI dan LangGraph memanggil dua method gRPC read-only di backend Spring Boot.',
  'a.f1': 'Model tidak pernah melihat tenant_id. Server yang menambahkannya di setiap tool call.',
  'a.f2': 'Setiap panggilan membawa service key yang dibandingkan secara constant-time.',
  'a.f3': 'Berikutnya untuk owner: prediksi stok dan laba harian di chat yang sama.',
  'm.h': 'cv-resume-builder, MCP server untuk CV ATS',
  'm.p': 'Server Node.js yang dipanggil Claude Code untuk mengubah profil menjadi CV A4 satu kolom. Server ini menulis .docx dan PDF, lalu memeriksa hasilnya sebelum dipakai.',
  'm.win': 'cv-resume-builder menjalankan empat tool dan menulis CV sebagai file Word dan PDF',
  'm.n1': 'Satu kolom', 'm.n1p': 'Tanpa tabel atau gambar yang membingungkan ATS.',
  'm.n2': 'Input diperiksa', 'm.n2p': 'Markup dan bullet liar ditolak.',
  'm.n3': 'Dua bahasa', 'm.n3p': 'Judul section dalam bahasa Indonesia atau Inggris.',
  'm.n4': '.docx dan PDF', 'm.n4p': 'Arial, A4, margin dari preset.',
  'ab.h': 'Kerja dan kuliah.', 'ab.h2': 'Mulai dari frontend, kini backend dan agent.',
  'ab.r1': 'Frontend Engineer, PT Andalas Petroleum Services', 'ab.r1d': '2024 sampai 2025',
  'ab.r1p': 'Portal operasi pengeboran antara SKK Migas dan KKKS: form sumur multi-langkah, tabel AG Grid, chart Plotly dan peta Leaflet dengan React 18.',
  'ab.r2': 'Freelance web developer', 'ab.r2d': '2023 sampai 2024',
  'ab.r2p': 'Website dengan React, Next.js dan Laravel, dari kebutuhan awal sampai serah terima.',
  'ab.r3': 'S1 Teknik Informatika, UPI YPTK Padang', 'ab.r3d': 'IPK 3.38',
  'ab.r3p': 'Skripsi: prediksi indeks saham dari berita Yahoo Finance dengan sentimen FinBERT dan LSTM.',
  'ab.alt': 'Muhammad Arifin memakai blazer hitam dan kacamata aviator, potret studio hitam putih',
  's.win': 'Java, Spring Boot, PostgreSQL, Docker, GitHub Actions, Python, FastAPI, LangChain, bot Telegram, React, TypeScript, Vite, Next.js, Claude Code, Codex dan Git',
  's.h': 'Stack yang saya pakai.', 's.h2': 'Java dan Python di server, React di layar.',
  's.p': 'Saya merencanakan dan mereview dengan Claude Code dan Codex, dan setiap perubahan tetap lewat test dan review sebelum di-merge.',
  'c.h': 'Unduh CV saya dalam PDF', 'c.p': 'Berdomisili di Padang. Terbuka untuk kerja remote atau pindah ke Jakarta.',
  'f.lede': 'Software engineer untuk AI agent dan backend Java.', 'f.agent': 'Agent Telegram',
  'f.profile': 'Profil', 'f.contact': 'Kontak', 'f.tm': 'Nama produk dan logo adalah merek dagang pemiliknya.',
};

const en = {};
const text = document.querySelectorAll('[data-i18n]');
text.forEach(el => { en[el.dataset.i18n] = el.textContent; });
const attrs = [['data-i18n-label', 'aria-label'], ['data-i18n-alt', 'alt']];
attrs.forEach(([key, attr]) => document.querySelectorAll(`[${key}]`).forEach(el => { en[el.getAttribute(key)] ??= el.getAttribute(attr); }));
const toggles = document.querySelectorAll('[data-lang-toggle]');

function apply(lang) {
  const dict = lang === 'id' ? id : en;
  text.forEach(el => { const v = dict[el.dataset.i18n]; if (v) el.textContent = v; });
  attrs.forEach(([key, attr]) => document.querySelectorAll(`[${key}]`).forEach(el => {
    const v = lang === 'id' ? id[el.getAttribute(key)] : en[el.getAttribute(key)];
    if (v) el.setAttribute(attr, v);
  }));
  document.documentElement.lang = lang;
  toggles.forEach(t => { t.textContent = lang === 'id' ? 'English' : 'Bahasa Indonesia'; t.lang = lang === 'id' ? 'en' : 'id'; });
  try { localStorage.setItem('lang', lang); } catch {}
}

let saved = null;
try { saved = localStorage.getItem('lang'); } catch {}
if (saved === 'id') apply('id');
toggles.forEach(t => t.addEventListener('click', () => apply(document.documentElement.lang === 'id' ? 'en' : 'id')));

// self-check: every key on the page has an Indonesian line
const missing = [...text].map(el => el.dataset.i18n).filter(k => !(k in id));
console.assert(missing.length === 0, 'lang.js: no Indonesian for', missing);
