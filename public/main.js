const coll = document.querySelector(".collapsible");

coll.addEventListener("click", function () {
  this.classList.toggle("active");
  const content = this.parentNode.querySelector(".content");
  if (content.style.display === "") {
    content.style.display = "block";
  } else {
    content.style.display = "";
  }
});

const email = document.getElementById("email");
const confirmEmail = document.getElementById("confirm-email");

function validateEmailsMatch() {
  if (email.value !== confirmEmail.value) {
    confirmEmail.setCustomValidity("Email addresses must match.");
  } else {
    confirmEmail.setCustomValidity("");
  }
}

email.addEventListener("input", validateEmailsMatch);
confirmEmail.addEventListener("input", validateEmailsMatch);
