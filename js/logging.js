// DROPDOWN COMPONENTS

const channelDropdowns = document.querySelectorAll(".channel-dropdown-wrapper");
const cArr = Array.from(channelDropdowns);

if (document.contains(cArr[0])) {
  window.addEventListener("click", function (e) {
    for (let i = 0; i < cArr.length; i++) {
      switch (e.target) {
        case cArr[i]:
          cArr[i]
            .querySelector(".dropdown-button")
            .classList.toggle("active-channel-button");
          cArr[i].querySelector("form").classList.toggle("active-channel-form");
          break;
        default:
          cArr[i]
            .querySelector(".dropdown-button")
            .classList.remove("active-channel-button");
          cArr[i].querySelector("form").classList.remove("active-channel-form");
          break;
      }
    }
  });
  channelDropdowns.forEach(function (channelDropdown) {
    let channelButton = channelDropdown.querySelector(".dropdown-button");
    let channelForm = channelDropdown.querySelector("form");
    let channelInputs = channelForm.querySelectorAll("input");
    if (channelInputs != null) {
      let inputArr = Array.from(channelInputs);

      if (inputArr != null && inputArr.length > 0) {
        inputArr[0].classList.add("channel-option-active");

        // DROPDOWN OPTIONS
        channelInputs.forEach(function (option) {
          option.addEventListener("click", function () {
            for (let index = 0; index <= inputArr.length - 1; index++) {
              inputArr[index].classList.remove("channel-option-active");
            }
            option.classList.add("channel-option-active");
            if (option.name == "no-channel") {
              channelButton.querySelector(".inner-text").innerHTML =
                "Select Channel";
            } else {
              channelButton.querySelector(".inner-text").innerHTML = option.name;
            }
          });
        });
      }
    }

    // DROPDOWN OPTIONS SUBMISSION
    /* This is where you can submit data from dropdowns */
    channelForm.addEventListener("submit", function (e) {
      e.preventDefault();
    });
  });
}

// MULTIPLE CHOICE

const loggingOptionForms = document.querySelectorAll(".activation-options");
let logFormArr = Array.from(loggingOptionForms);
const loggingOptions = document.querySelectorAll(".logging-feature");

if (logFormArr != null && document.contains(logFormArr[0])) {
  logFormArr.forEach(function (loggingForm) {
    let submitArr = [];
    let options = loggingForm.querySelectorAll(".logging-feature");
    loggingForm.addEventListener("submit", function (e) {
      e.preventDefault();
      for (let index = 0; index <= Array.from(options).length - 1; index++) {
        submitArr[index] = `${
          Array.from(options)[index].querySelector("input").value
        } : ${Array.from(options)[index].querySelector("input").ariaSelected}`;
      }
      // LOGGING FEATURES TO SUBMIT TO DATABASE
      console.log(submitArr);
      // LOGGING FEATURES TO SUBMIT TO DATABASE ^^^^^
      //loggingForm.submit();
    });
  });
  loggingOptions.forEach(function (option) {
    let toggleBool = false;
    switch (option.querySelector("input").ariaSelected) {
      case "true":
        break;
      default:
        option.querySelector("input").ariaSelected = "false";
        break;
    }
    option.addEventListener("click", function () {
      toggleBool = !toggleBool;
      option.classList.toggle("logging-feature-active");
      switch (toggleBool) {
        case true:
          option.querySelector("input").ariaSelected = "true";
          break;
        case false:
          option.querySelector("input").ariaSelected = "false";
          option.querySelector("input").blur();
          break;
        default:
          option.querySelector("input").ariaSelected = "false";
          option.querySelector("input").blur();
          break;
      }
    });
  });
}

// MESSAGE INPUTS

const messageWrappers = document.querySelectorAll(".channel-message-wrapper");
const mArr = Array.from(messageWrappers);

if (document.contains(mArr[0])) {
  messageWrappers.forEach(function (messageWrapper) {
    const inputError = messageWrapper.querySelector(".message-error");
    const submitInput = messageWrapper.querySelector(".msg-btn-add");
    const input = messageWrapper.querySelector("input");
    const minlength = Number(input.ariaValueMin);
    const maxlength = Number(input.ariaValueMax);
    const charCount = messageWrapper.querySelector(".character-count");
    const msgDel = messageWrapper.querySelector(".message-delete");
    let inputKey;
    let submitBool;

    switch (input.ariaModal) {
      case "":
        break;
      case "text":
        break;
      case "number":
        break;

      default:
        break;
    }

    msgDel.addEventListener("click", function () {
      input.value = "";
      messageWrapper.dataset.state = "";
      inputError.dataset.state = "";
      charCount.dataset.state = "";
      submitInput.dataset.state = "";
      msgDel.dataset.state = "";
    });

    input.addEventListener("input", function () {
      let inputVal = input.value.trim();
      let displayVal = input.value;
      charCount.innerText = inputVal.length;
      switch (displayVal) {
        case "":
          messageWrapper.dataset.state = "";
          charCount.dataset.state = "";
          msgDel.dataset.state = "";
          break;
        default:
          messageWrapper.dataset.state = "active";
          charCount.dataset.state = "count";
          msgDel.dataset.state = "delete";
          break;
      }
      if (inputVal.length >= minlength && inputVal.length <= maxlength) {
        submitInput.dataset.state = "ready";
        submitBool = true;
        inputError.dataset.state = "";
      } else {
        submitInput.dataset.state = "";
        submitBool = false;
      }
    });

    input.addEventListener("blur", function () {
      window.addEventListener("click", function (e) {
        let inputVal = input.value.trim();
        let displayVal = input.value;
        switch (e.target) {
          case msgDel:
            break;
          default:
            if (displayVal.length >= 1 && inputVal.length < minlength) {
              inputError.innerText = `${minlength} Characters Minimum`;
              inputError.dataset.state = "error";
            } else if (inputVal.length > maxlength) {
              inputError.innerText = `${maxlength} Characters Maximimum`;
              inputError.dataset.state = "error";
            } else {
              inputError.dataset.state = "";
            }
            break;
        }
      });
    });

    messageWrapper.addEventListener("submit", function (e) {
      let inputVal = input.value.trim();
      let displayVal = input.value;
      switch (submitBool) {
        case true:
          break;
        case false:
          e.preventDefault();
          if (displayVal.length >= 1 && inputVal.length < minlength) {
            inputError.innerText = `${minlength} Characters Minimum`;
            inputError.dataset.state = "error";
          } else if (inputVal.length > maxlength) {
            inputError.innerText = `${maxlength} Characters Maximimum`;
            inputError.dataset.state = "error";
          } else {
            inputError.dataset.state = "";
          }
          break;
        default:
          e.preventDefault();
          if (displayVal.length >= 1 && inputVal.length < minlength) {
            inputError.innerText = `${minlength} Characters Minimum`;
            inputError.dataset.state = "error";
          } else if (inputVal.length > maxlength) {
            inputError.innerText = `${maxlength} Characters Maximimum`;
            inputError.dataset.state = "error";
          } else {
            inputError.dataset.state = "";
          }
          break;
      }
    });
  });
}
