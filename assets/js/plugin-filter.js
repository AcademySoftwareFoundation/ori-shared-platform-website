(function () {
  var bar = document.getElementById('plugin-filter-bar');
  var grid = document.getElementById('plugin-grid');
  var countEl = document.getElementById('plugin-count');
  if (!bar || !grid) return;

  var buttons = Array.from(bar.querySelectorAll('.plugin-filter-btn'));
  var cards = Array.from(grid.querySelectorAll('article[data-host-app]'));

  function updateCount() {
    var visible = cards.filter(function (c) { return !c.hidden; }).length;
    if (countEl) {
      countEl.textContent = visible + ' plugin' + (visible !== 1 ? 's' : '');
    }
  }

  function applyFilter(app) {
    cards.forEach(function (card) {
      var apps = card.dataset.hostApp ? card.dataset.hostApp.split(',') : [];
      card.hidden = app !== 'all' && apps.indexOf(app) === -1;
    });
    updateCount();
  }

  function setActive(activeBtn) {
    buttons.forEach(function (b) {
      var isActive = b === activeBtn;
      b.classList.toggle('plugin-filter-btn--active', isActive);
      b.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setActive(btn);
      applyFilter(btn.dataset.filter);
    });
  });

  // Initialise
  var defaultBtn = bar.querySelector('.plugin-filter-btn[data-filter="all"]');
  if (defaultBtn) setActive(defaultBtn);
  updateCount();
})();
