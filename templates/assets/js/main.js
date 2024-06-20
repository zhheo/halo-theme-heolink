function showNav() {
  document.getElementById("nav_list").classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', function () {
  const pjax = new Pjax({
    selectors: [
      "title",
      "#web_content"
    ]
  })

  heolink.initNavLink();
  heolink.listenNavScroll();
});

document.addEventListener('pjax:complete', function() {
  heolink.initNavLink();
  heolink.listenNavScroll();
});