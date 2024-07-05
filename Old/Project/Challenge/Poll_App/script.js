"use strcit";
const poll = {
  answer: [0, 0, 0, 0],

  registerNewAnswer() {
    const inputNumber = prompt(`
    What is your favourite programming language?
    0: JavaScript
    1: Python
    2: Rust
    3: C++
    (Write option number)`);
    // console.log(inputNumber);
    // console.log(typeof inputNumber); //string

    if (inputNumber >= 0 && inputNumber < this.answer.length) {
      this.answer[inputNumber]++;
    } else alert("Please check your insert number!");
    console.log(this.answer);
  },
};
//poll.registerNewAnswer();
const pollButton = document.querySelector(".poll"); //选中class为poll的第一个元素
pollButton.addEventListener("click", poll.registerNewAnswer.bind(poll));
