const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px 0px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(function (fader) {
  appearOnScroll.observe(fader);
});

const sectionHome = document.querySelector("#home");
const sectionFeatures = document.querySelector("#features");
const sectionTeam = document.querySelector("#team");
const sectionInvite = document.querySelector("#invite");

const options = {
  threshold: 0.5,
  rootMargin: "0px 0px 0px 0px",
};

let hashUrl;
let observerLinks = document.querySelectorAll(".desktop-nav a");
let traveling = false;
observerLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    traveling = true;
  });
});

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    hashUrl = document.URL.substring(document.URL.indexOf("#") + 1);
    if (!entry.isIntersecting) {
      return;
    } else {
      if (hashUrl.match(entry.target.getAttribute("id"))) {
        traveling = false;
      }
      if (traveling == false) {
        observerLinks.forEach(function (link) {
          if (link.href.includes(`#${entry.target.getAttribute("id")}`)) {
            link.classList.add("slide-active");
          } else {
            link.classList.remove("slide-active");
          }
        });
      }
    }
  });
}, options);

observer.observe(sectionHome);
observer.observe(sectionFeatures);
observer.observe(sectionTeam);
observer.observe(sectionInvite);
