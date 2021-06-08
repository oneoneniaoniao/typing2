"use strict";

{
  const p = document.getElementById("text");
  const textList = ["Hello", "html", "javascript", "css", "World"];
  let checkText = [];

  createText();

  function createText() {
    const num = Math.floor(Math.random() * textList.length);

    p.textContent = "";

    checkText = textList[num].split("").map(function (value) {
      var span = document.createElement("span");
      span.textContent = value;
      p.appendChild(span);
      return span;
    });
  }

  console.log(checkText[0]);

  document.addEventListener("keydown", (e) => {
    // console.log(e.key);
    if (e.key === checkText[0].textContent) {
      checkText[0].classList.add("add_blue");
      console.log("correct");
      checkText.shift();
      if (!checkText.length) {
        createText();
      }
    }
  });
}
