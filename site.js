// site.js — brand-site interactions: theme toggle + mobile nav. Loaded with defer.
// (The pre-paint theme application stays inline in index.html <head> to avoid a
//  flash of the wrong theme — it must run before the stylesheet/first paint.)

// --- three-state theme toggle (shares the 'theme' localStorage key) ---
(function () {
  var root = document.documentElement;
  function apply(t) { if (t === 'system') root.removeAttribute('data-theme'); else root.setAttribute('data-theme', t); }
  function current() { return localStorage.getItem('theme') || 'system'; }
  function paint() {
    var c = current();
    document.querySelectorAll('[data-theme-set]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.themeSet === c));
    });
  }
  document.querySelectorAll('[data-theme-set]').forEach(function (b) {
    b.addEventListener('click', function () {
      var t = b.dataset.themeSet;
      if (t === 'system') localStorage.removeItem('theme'); else localStorage.setItem('theme', t);
      apply(t); paint();
    });
  });
  paint();
})();

// --- mobile hamburger menu ---
(function () {
  var btn = document.getElementById('nav-toggle');
  var menu = document.getElementById('nav-menu');
  if (!btn || !menu) return;
  function close() { menu.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    var open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
  menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
  document.addEventListener('click', function (e) {
    if (menu.classList.contains('open') && !menu.contains(e.target) && e.target !== btn) close();
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
})();
