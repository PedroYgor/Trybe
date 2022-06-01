// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

const link = (event) => {
  event.preventDefault();
};
const checkbox = (event) => {
  event.preventDefault();
};
const text = (event) => {
  if (event.key !== 'a') {
    event.preventDefault();
  } 
};

HREF_LINK.addEventListener('click', link);
INPUT_CHECKBOX.addEventListener('click', checkbox);
INPUT_TEXT.addEventListener('keypress', text);