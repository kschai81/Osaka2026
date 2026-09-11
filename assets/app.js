/* 공용 스크립트 — 시간축 눈금 + 검색 팝업 */
(function () {
  // 시간축 눈금: <div class="ticks-bar" data-from="17" data-to="24">
  document.querySelectorAll('.ticks-bar').forEach(function (bar) {
    var from = parseInt(bar.dataset.from || '17', 10);
    var to = parseInt(bar.dataset.to || '24', 10);
    var span = to - from;
    if (!(span > 0)) return;
    // 범위가 넓으면 라벨은 2시간 간격으로만 (눈금은 매시)
    var step = span > 10 ? 2 : 1;
    for (var h = from; h <= to; h++) {
      var pct = ((h - from) / span) * 100;
      var i = document.createElement('i');
      i.style.left = pct + '%';
      if ((h - from) % step !== 0 && h !== to) i.style.height = '3px';
      bar.appendChild(i);
      if ((h - from) % step !== 0 && h !== to) continue;
      var s = document.createElement('span');
      s.textContent = (h < 10 ? '0' + h : h) + ':00';
      s.style.left = pct + '%';
      if (h === from) s.style.transform = 'translateX(0)';
      if (h === to) s.style.transform = 'translateX(-100%)';
      bar.appendChild(s);
    }
  });

  // 식당 검색 버튼 → 새 창 팝업
  document.querySelectorAll('.sbtn button').forEach(function (b) {
    b.addEventListener('click', function () {
      var q = encodeURIComponent(b.dataset.q || '');
      if (!q) return;
      var u = b.dataset.e === 'g'
        ? 'https://www.google.com/search?q=' + q
        : 'https://search.naver.com/search.naver?query=' + q;
      window.open(u, '_blank', 'noopener,noreferrer,width=540,height=800');
    });
  });
})();
