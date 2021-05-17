const toggleBtnElement = document.querySelector(".toggle");
const closeBtnElement = document.querySelector(".close-btn");
const signUpBtnElement = document.querySelector(".signup-btn");
const modalContainer = document.querySelector(".modal-container");
const navBarContainer = document.querySelector(".nav-bar");
const mainContainer = document.querySelector(".main-container");

const nameElement = document.querySelector("#name");
const emailElement = document.querySelector("#email");
const passwordElement = document.querySelector("#password");
const submitBtnElement = document.querySelector(".submit-btn");

const API_URL = "http://localhost:3000";

function closeNavbar(e) {
  // if (
  //   document.body.classList.contains("show-nav") &&
  //   e.target !== toggle &&
  //   !toggle.contain(e.target) &&
  //   e.target !== navBar &&
  //   !navBar.contains(e.target)
  // ) {
  //   document.body.classList.toggle("show-nav");
  //   document.body.removeEventListener(click, closeNavbar);
  // } else if (!document.body.classList.contains(show - nav)) {
  //   document.body.removeEventListener(click, close);
  // }
  if (
    e.target !== toggleBtnElement &&
    !toggleBtnElement.contains(e.target) &&
    document.body.classList.contains("show-nav")
  ) {
    document.body.classList.remove("show-nav");
  }
}

// Toggle nav
toggleBtnElement.addEventListener("click", () => {
  // document.body.classList.toggle("show-nav");
  if (document.body.classList.contains("show-nav")) {
    document.body.classList.remove("show-nav");
  } else {
    document.body.classList.add("show-nav");
  }
});

document.body.addEventListener("click", closeNavbar);

signUpBtnElement.addEventListener("click", () => {
  modalContainer.classList.add("show-modal");
});

closeBtnElement.addEventListener("click", () => {
  modalContainer.classList.remove("show-modal");
});

submitBtnElement.addEventListener("click", async function () {
  const name = nameElement.value;
  const email = emailElement.value;
  const password = passwordElement.value;
  const data = { name: name, email: email, password: password };

  try {
    const result = await fetch(`${API_URL}/submit-form`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(result);
  } catch (err) {}
});
