const form = document.querySelector(".form");
const email = document.querySelector(".form-input");
const submitBtn = document.querySelector(".form-btn");
const errorMessage = document.querySelector(".form-error");
const emailRegex =
    /^[\w.! #$%&'*+=? ^_`{|}~-]+@[a-zA-Z0-9-]+([\.-]?\w+)*(\.\w{2,3})+$/gm;

const validateForm = () => {
    const emailValue = email.value;
    if (emailValue.length === 0 || !emailValue.match(emailRegex)) {
        errorMessage.style.display = "block";
        email.setAttribute("aria-invalid", "true");
        email.classList.add("invalid");
        return false;
    }
    emailValue.length === 0;
    errorMessage.style.display = "none";
    email.setAttribute("aria-invalid", "false");
    email.classList.remove("invalid");
    return true;
};

form.addEventListener("submit", (e) => {
    const isFormValid = validateForm();
    if (isFormValid) {
        return true;
    } else {
        e.preventDefault();
    }
});
