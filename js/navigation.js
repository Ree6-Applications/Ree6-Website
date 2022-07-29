const fadeElementPageTrans = document.querySelector(".transition-fade");

document.addEventListener("DOMContentLoaded", function () {
  console.log(
    "\n\nWelcome to REE6! Thanks for checking out our code and being interested in what our Discord Bot can do for you! If you are interested in code and want to know how our bot works than you can view REE6 Repositories at: \n\nhttps://github.com/Ree6-Applications\n\n"
  );
  setTimeout(() => {
    fadeElementPageTrans.classList.add("transition-inactive");
  }, 200);
});

const navLinks = Array.from(document.querySelectorAll("nav.desktop-nav a"));
const navLinksEndIndex = navLinks.length - 1;
let localHashTagUrl = location.hash;

navLinks.forEach(function (navLink) {
  if (navLink.hash == localHashTagUrl && localHashTagUrl != "") {
    navLink.classList.add("slide-active");
  }
  navLink.addEventListener("click", function () {
    for (let i = 0; i <= navLinksEndIndex; i++) {
      navLinks[i].classList.remove("slide-active");
    }
    navLink.classList.add("slide-active");
  });
});

const hamburgerButton = document.querySelector("button.hamburger-button");
const hamburgerWrapper = document.querySelector("nav.hamburger-wrapper");
const hamburgerContainer = document.querySelector(".hamburger-container");
hamburgerButton.addEventListener("click", function () {
  hamburgerButton.classList.toggle("hamburger-button-active");
  hamburgerWrapper.classList.toggle("hamburger-wrapper-active");
});

window.addEventListener("click", function (e) {
  if (
    e.target != hamburgerButton &&
    e.target != hamburgerWrapper &&
    e.target != hamburgerContainer
  ) {
    hamburgerButton.classList.remove("hamburger-button-active");
    hamburgerWrapper.classList.remove("hamburger-wrapper-active");
  }
});

const featureButtons = document.querySelectorAll("[data-feature]");
const featuresArray = Array.from(featureButtons);
const featureLabels = Array.from(document.querySelectorAll("[data-label]"));
const titleArray = [
  "Moderation",
  "Music",
  "Fun-Commands",
  "Advanced Logging",
  "Chat & Voice Leveling",
  "Configuration",
];
const paragraphArray = [
  "Support in moderation is not lacking at ree6. Thanks to a sophisticated moderation system, you can sit back relax and punish rule breakers with a single command. Included are: mute, kick, ban and automatic moderative actions.",
  "With our built-in Music Player you can play Music from Websites such as Spotify, YouTube, Vimeo, Bandcamp, SoundCloud and even custom MP3 Files!",
  "By using different APIs Ree6 has the ability to give your Random Facts, Dog Images and Cat Images! We even have Commands such as slap and kiss!",
  "Ree6 offers varied audit logging in a clearer, more clearly structured style. All possible changes to the server are displayed (invite logging, role changes, channel switching and many more).",
  "The bot offers a constructed level system. Right now we're referring to this as chat leveling. Rank queries and a leaderboard are also included and work perfectly.",
  "The bot will offer a newly built Configuration System for our users.",
];
const ctaArray = [
  "Authorize with Ree6",
  "Turn it Up with Ree6",
  "Command with Ree6",
  "Analyze the Data with Ree6",
  "Level Up with Ree6",
  "Even the Odds with Ree6",
];
const featureCount = document.querySelector(".count");
const featureSummary = document.querySelector(".summary");

featureButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (
      !button
        .querySelector(".inner-img-wrapper")
        .classList.contains("feature-active")
    ) {
      featureSummary.style.opacity = 0;
      featureSummary.style.transform = "translateX(10px)";
      button.style.pointerEvents = "none";
      setTimeout(function () {
        featureSummary.querySelector("h2").innerHTML =
          titleArray[Number(featuresArray.indexOf(button))];
        featureSummary.querySelector("p").innerHTML =
          paragraphArray[Number(featuresArray.indexOf(button))];
        featureSummary.querySelector("a .inner-text").innerHTML =
          ctaArray[Number(featuresArray.indexOf(button))];
        featureCount.innerHTML = `0${
          Number(featuresArray.indexOf(button)) + 1
        }`;
        featureSummary.style.transform = "translateX(0)";
        featureSummary.style.opacity = 1;
        button.style.pointerEvents = "all";
      }, 200);
    }
    for (let i = 0; i <= featuresArray.length - 1; i++) {
      switch (i <= Number(featuresArray.indexOf(button))) {
        case true:
          featuresArray[i]
            .querySelector(".inner-img-wrapper")
            .classList.remove("feature-active");
          featuresArray[i]
            .querySelector(".inner-img-wrapper")
            .classList.add("feature-past");
          featureLabels[i].classList.remove("feature-active-text");
          break;
        case false:
          featuresArray[i]
            .querySelector(".inner-img-wrapper")
            .classList.remove("feature-active");
          featuresArray[i]
            .querySelector(".inner-img-wrapper")
            .classList.remove("feature-past");
          featureLabels[i].classList.remove("feature-active-text");
          break;
        default:
          break;
      }
    }
    button.querySelector(".inner-img-wrapper").classList.add("feature-active");
    featureLabels[Number(featuresArray.indexOf(button))].classList.add(
      "feature-active-text"
    );
  });
});

const mobileFeatureButtons = Array.from(
  document.querySelectorAll(".mobile-features button")
);

mobileFeatureButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (!button.classList.contains("feature-active")) {
      featureSummary.style.opacity = 0;
      featureSummary.style.transform = "translateX(10px)";
      button.style.pointerEvents = "none";
      setTimeout(function () {
        featureSummary.querySelector("h2").innerHTML =
          titleArray[Number(mobileFeatureButtons.indexOf(button))];
        featureSummary.querySelector("p").innerHTML =
          paragraphArray[Number(mobileFeatureButtons.indexOf(button))];
        featureSummary.querySelector("a .inner-text").innerHTML =
          ctaArray[Number(mobileFeatureButtons.indexOf(button))];
        featureCount.innerHTML = `0${
          Number(mobileFeatureButtons.indexOf(button)) + 1
        }`;
        featureSummary.style.transform = "translateX(0)";
        featureSummary.style.opacity = 1;
        button.style.pointerEvents = "all";
      }, 200);
    }
    for (let i = 0; i <= mobileFeatureButtons.length - 1; i++) {
      mobileFeatureButtons[i].classList.remove("mobile-feature-active");
    }
    button.classList.add("mobile-feature-active");
  });
});

const links = document.querySelectorAll("a");

links.forEach(function (link) {
  if (link.target == "" && link.ariaDisabled != "true") {
    let transCheck;
    link.addEventListener("click", function (e) {
      e.preventDefault();
      fadeElementPageTrans.style.opacity = "1";
      fadeElementPageTrans.style.pointerEvents = "all";
      transCheck = true;
      setTimeout(function () {
        switch (transCheck) {
          case true:
            window.location = link.href;
            break;
          default:
            break;
        }
      }, 350);
    });
  }
});
