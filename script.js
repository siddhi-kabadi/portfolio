/* Small tab-title touches — kept subtle and easy to remove.
   1) On load, the tab title types itself out rather than just appearing.
   2) If you switch away from the tab, it leaves a little note and comes back
      to the real title when you return. */
(function () {
  var finalTitle = document.title;

  function typeTitle() {
    var i = 0;
    document.title = "";
    (function step() {
      document.title = finalTitle.slice(0, i);
      i++;
      if (i <= finalTitle.length) setTimeout(step, 55);
    })();
  }

  if (document.readyState === "complete" || document.readyState === "interactive") {
    typeTitle();
  } else {
    document.addEventListener("DOMContentLoaded", typeTitle);
  }

  var awayTitle = "siddhi 🍵";
  document.addEventListener("visibilitychange", function () {
    document.title = document.hidden ? awayTitle : finalTitle;
  });
})();
