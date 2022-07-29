const percents = document.querySelectorAll("[data-percent]");

percents.forEach(function (percent) {
  percent.querySelector(
    ".leaderboard-stats .progress-bar-wrapper .percentage"
  ).innerHTML = `${percent.dataset.percent}%`;
  percent.querySelector(
    ".leaderboard-stats .progress-bar-wrapper .bar"
  ).style.width = `${percent.dataset.percent}%`;
});
