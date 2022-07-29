const entryWrappers = document.querySelectorAll(".entries-wrapper");
let entryWrapperArr = Array.from(entryWrappers);

if (document.contains(entryWrapperArr[0])) {
  entryWrapperArr.forEach(function (wrapper) {
    if (!wrapper.querySelector(".entry")) {
      wrapper.classList.add("inactive");
    }
  });
}
