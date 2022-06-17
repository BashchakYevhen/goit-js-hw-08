import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const name = document.querySelector('[name="email"]')
const email = document.querySelector('[name="message"]')
const btn = document.querySelector('[type="submit"]')
// console.dir(form)
const FEEDBACK_KEY = "feedback-form-state";
const feed = {
    name: '',
    email: ''
};


form.addEventListener("input", throttle(saveToStorage, 300));
form.addEventListener('submit', formSubmit)

chekFormStatus();

function saveToStorage(e) {
    feed.name = name.value;
    feed.email = email.value;;
localStorage.setItem(FEEDBACK_KEY, JSON.stringify(feed))
};

function formSubmit(e) {
    e.preventDefault();
    if (name.value === "" || email.value === "") {
        alert("fill in all the fields")
    } else {console.log(feed);
    localStorage.removeItem(FEEDBACK_KEY);
    e.currentTarget.reset();}
};
function chekFormStatus() {
    if (localStorage.getItem(FEEDBACK_KEY)) {
       const formValue = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
        name.value = formValue.name
         email.value = formValue.email
    }
    else {
        name.value = '';
        email.value = '';
    }
}