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
});