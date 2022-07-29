const times = document.querySelectorAll("[data-time]");
const date = new Date();
times.forEach(function (time) {
  time.innerHTML = Math.abs(Number(time.dataset.time) - date.getFullYear());
});
