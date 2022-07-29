const cursor = document.querySelector(".cursor");
const innerCursor = document.querySelector(".inner-cursor");
const cursorModal = document.querySelector(".cursor-modal");
const teamMembers = document.querySelectorAll(".team-member-wrapper");
const parallaxElements = document.querySelectorAll("[data-parallax]");
const dataCopies = document.querySelectorAll("[data-copy]");
const hamBtn = document.querySelector(".hamburger-button");
const hamWrap = document.querySelector(".hamburger-wrapper");
const desktopNav = document.querySelector(".desktop-nav");
const dimText = document.querySelector(".dim-text");
const footerNavLinks = document.querySelectorAll(".nav-list :is(a, button)");
const copyrightLinks = document.querySelectorAll(".copyright a");
const policyLinks = document.querySelectorAll("section.list a");
const navArrow = document.querySelector("a.nav-arrow");
if (document.contains(navArrow)) {
  navArrow.setAttribute("data-highlight", "");
}
let policyLinksArr = Array.from(policyLinks);
if (document.contains(policyLinksArr[0])) {
  policyLinks.forEach(function (link) {
    link.setAttribute("data-highlight", "");
  });
}
copyrightLinks.forEach(function (link) {
  link.setAttribute("data-highlight", "");
});
footerNavLinks.forEach(function (link) {
  link.setAttribute("data-highlight", "");
});
dimText.setAttribute("data-highlight", "");
dimText.setAttribute("data-color-border", "#fff");
dimText.setAttribute("data-color-background", "#ffffff00");
dimText.setAttribute("data-color-dot", "#fff");
desktopNav.setAttribute("data-highlight", "");
const cursorHighlight = document.querySelectorAll("[data-highlight]");
const root = document.documentElement;
let colorOne = "transparent";
let colorTwo = "#cdfa46";
let colorThree = "#000";
let hexRegex = new RegExp("^#([a-fA-F0-9]){3}$|[a-fA-F0-9]{6}$");
let check = true;

function isMobile() {
  let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    let style = document.createElement("link");
    style.rel = "stylesheet";
    style.type = "text/css";
    style.href = "/styles/mobile.css";
    document.head.appendChild(style);
    if (!window.matchMedia("only screen and (min-width: 550px)").matches) {
      parallaxElements.forEach(function (parallax) {
        parallax.removeAttribute("data-parallax");
        parallax.removeAttribute("data-yaxis");
        parallax.removeAttribute("data-xaxis");
      });
    }
  }
}

isMobile();

teamMembers.forEach(function (teamMember) {
  teamMember.addEventListener("mouseover", function () {
    cursorModal.innerHTML = teamMember.ariaRoleDescription;
    check = false;
  });
  teamMember.addEventListener("mouseleave", function () {
    check = true;
  });
});

dataCopies.forEach(function (dataCopy) {
  dataCopy.addEventListener("click", function () {
    navigator.clipboard.writeText(dataCopy.dataset.copy).then(
      function () {
        cursorModal.innerHTML = `Copied: ${dataCopy.dataset.copy}`;
      },
      function () {
        cursorModal.innerHTML = `Failed to Copy to Clipboard`;
      }
    );
    cursorModal.style.opacity = 1;
    check = false;
    setTimeout(function () {
      dataCopy.blur();
    }, 990);
    setTimeout(function () {
      cursorModal.style.opacity = 0;
      check = true;
    }, 1050);
  });
});

document.addEventListener("mousedown", () => {
  cursor.classList.add("expand");
});

document.addEventListener("mouseup", () => {
  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 70);
});

document.addEventListener("mousemove", function (e) {
  switch (check) {
    case true:
      cursor.setAttribute(
        "style",
        "top: " +
          e.clientY +
          "px; left: " +
          e.clientX +
          "px;" +
          "opacity: 1;" +
          "width: 25px;" +
          "height: 25px;"
      );
      innerCursor.setAttribute(
        "style",
        "top: " +
          e.clientY +
          "px; left: " +
          e.clientX +
          "px;" +
          "opacity: 1;" +
          "width: 5px;" +
          "height: 5px;"
      );
      cursorModal.setAttribute(
        "style",
        "top: " +
          (e.clientY + 15) +
          "px; left: " +
          (e.clientX + 15) +
          "px; opacity: 0;"
      );
      parallaxElements.forEach(function (parallax) {
        parallax.setAttribute(
          "style",
          "transform: translateX(" +
            (window.innerWidth * 0.5 - e.clientX) *
              (parallax.dataset.xaxis / 10) +
            "px) translateY(" +
            (window.innerHeight * 0.5 - e.clientY) *
              (parallax.dataset.yaxis / 10) +
            "px)"
        );
      });
      break;
    case false:
      cursor.setAttribute(
        "style",
        "top: " +
          e.clientY +
          "px; left: " +
          e.clientX +
          "px;" +
          "opacity: 1;" +
          "width: 25px;" +
          "height: 25px;"
      );
      innerCursor.setAttribute(
        "style",
        "top: " +
          e.clientY +
          "px; left: " +
          e.clientX +
          "px;" +
          "opacity: 1;" +
          "width: 5px;" +
          "height: 5px;"
      );
      cursorModal.setAttribute(
        "style",
        "top: " +
          (e.clientY + 15) +
          "px; left: " +
          (e.clientX + 15) +
          "px; opacity: 1;"
      );
      parallaxElements.forEach(function (parallax) {
        parallax.setAttribute(
          "style",
          "transform: translateX(" +
            (window.innerWidth * 0.5 - e.clientX) *
              (parallax.dataset.xaxis / 10) +
            "px) translateY(" +
            (window.innerHeight * 0.5 - e.clientY) *
              (parallax.dataset.yaxis / 10) +
            "px)"
        );
      });
      break;

    default:
      break;
  }
});

hamBtn.addEventListener("mousemove", function () {
  if (document.querySelector(".hamburger-button-active")) {
    colorOne = "transparent";
    colorTwo = "#e52222";
    colorThree = "#fff";
  } else {
    colorOne = "transparent";
    colorTwo = "#cdfa46";
    colorThree = "#000";
  }
  root.style.setProperty("--cursor-color-one", colorOne);
  root.style.setProperty("--cursor-color-two", colorTwo);
  root.style.setProperty("--cursor-color-three", colorThree);
});

hamBtn.addEventListener("click", function () {
  if (document.querySelector(".hamburger-button-active")) {
    colorOne = "transparent";
    colorTwo = "#e52222";
    colorThree = "#fff";
  } else {
    colorOne = "transparent";
    colorTwo = "#cdfa46";
    colorThree = "#000";
  }
  root.style.setProperty("--cursor-color-one", colorOne);
  root.style.setProperty("--cursor-color-two", colorTwo);
  root.style.setProperty("--cursor-color-three", colorThree);
});

hamBtn.addEventListener("mouseleave", function () {
  root.style.setProperty("--cursor-color-one", "#cdfa46");
  root.style.setProperty("--cursor-color-two", "transparent");
  root.style.setProperty("--cursor-color-three", "#cdfa46");
});

hamWrap.addEventListener("mousemove", function () {
  colorOne = "transparent";
  colorTwo = "#cdfa46";
  colorThree = "#000";
  root.style.setProperty("--cursor-color-one", colorOne);
  root.style.setProperty("--cursor-color-two", colorTwo);
  root.style.setProperty("--cursor-color-three", colorThree);
});

hamWrap.addEventListener("mouseleave", function () {
  root.style.setProperty("--cursor-color-one", "#cdfa46");
  root.style.setProperty("--cursor-color-two", "transparent");
  root.style.setProperty("--cursor-color-three", "#cdfa46");
});

cursorHighlight.forEach(function (highlight) {
  let dataColorOne = highlight.dataset.colorBorder;
  let dataColorTwo = highlight.dataset.colorBackground;
  let dataColorThree = highlight.dataset.colorDot;
  highlight.addEventListener("mousemove", function () {
    if (
      highlight.hasAttribute("data-color-border") &&
      dataColorOne.match(hexRegex)
    ) {
      colorOne = dataColorOne;
    } else {
      colorOne = "transparent";
    }
    if (
      highlight.hasAttribute("data-color-background") &&
      dataColorTwo.match(hexRegex)
    ) {
      colorTwo = dataColorTwo;
    } else {
      colorTwo = "#cdfa46";
    }
    if (
      highlight.hasAttribute("data-color-dot") &&
      dataColorThree.match(hexRegex)
    ) {
      colorThree = dataColorThree;
    } else {
      colorThree = "#000";
    }
    root.style.setProperty("--cursor-color-one", colorOne);
    root.style.setProperty("--cursor-color-two", colorTwo);
    root.style.setProperty("--cursor-color-three", colorThree);
  });

  highlight.addEventListener("mouseleave", function () {
    root.style.setProperty("--cursor-color-one", "#cdfa46");
    root.style.setProperty("--cursor-color-two", "transparent");
    root.style.setProperty("--cursor-color-three", "#cdfa46");
  });
});
