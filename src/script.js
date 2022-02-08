const form = document.getElementById("form");
const email = document.getElementById("email");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (email.value === "") {
    email.classList.add("ring-2", "ring-[#FF2965]");
    email.classList.remove("focus:ring-[#3EE9E5]", "focus:ring-2");
    errorMessage.classList.remove("invisible");
  } else {
    email.classList.remove("ring-2", "ring-[#FF2965]");
    email.classList.add("focus:ring-[#3EE9E5]", "focus:ring-2");
    errorMessage.classList.add("invisible");
  }
});
