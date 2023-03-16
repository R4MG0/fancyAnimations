const hello = document.getElementById("hello");
const numberInput = document.getElementById("numberInput");

document.getElementById("colorChooser").onchange = function () {
  // do whatever you want with value
  const pageTitle = document.getElementById("majorTitle");
  const choosedColorTitle = document.getElementById("choosedColor");
  pageTitle.style.color = this.value;
  choosedColorTitle.innerHTML = this.value;
  choosedColorTitle.style.color = this.value;
};

function updateNumberInput() {
  this.numberInput = document.getElementById("numberInput");
  this.variable = this.numberInput.value;
  setuph1();
}

function setuph1() {
  let titleParagraph = document.getElementById("title");
  titleParagraph.innerHTML = this.variable;
  titleParagraph.style.color = "grey";
}
