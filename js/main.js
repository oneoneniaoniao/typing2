"use strict";

{
  const q = document.getElementById("text");
  const p = document.getElementById("point")
  const textList = ["css", "html", "javascript"];
  let checkText = [];
  let wrong = 0;

  createText();

  function createText() {
    // const num = Math.floor(Math.random() * textList.length);
    q.textContent = "";
    if(textList.length===0){
      q.textContent="Try Again?";
      if(wrong===0){
        p.textContent = "Perfect!!";
      }else if(wrong===1){
        p.textContent = "Close! You missed one time.";
      }else{
        p.textContent = `You missed ${wrong} times.`;
      }
    }
    checkText = textList.splice(Math.floor(Math.random() * textList.length), 1);
    checkText = checkText[0].split("").map(function (value) {
      var span = document.createElement("span");
      span.textContent = value;
      q.appendChild(span);
      return span;
    });

  }

  // console.log(checkText[0]);

  document.addEventListener("keydown", (e) => {
    // console.log(e.key);
    if (e.key === checkText[0].textContent) {
      checkText[0].classList.add("add_blue");
      console.log("correct");
      checkText.shift();
      if (!checkText.length) {
        createText();
      }
    }else{
      console.log("wrong");
      wrong++
    }
  });
}
