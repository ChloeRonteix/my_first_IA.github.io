const createMessage = (answer) => {
  //let boldanswer = document.getElementById("user-answer").style.fontWeight = "900";
  let username = answer.toLowerCase();
  const array = ["c", "h", "l", "o", "e"];
  let c = 0;
  array.forEach(i => {
    if (username.includes(i)) {
      c++;
    }
  });
  return `Tu t'appelles ${answer}! Nous avons ${c} lettres en commun`;
};

const form = document.getElementById("my-form");
console.log(form);

const message = document.getElementById("ia-message");
const counter = document.getElementById("counter");
let count = 0;

form.addEventListener("submit", (event) => {
  const input = document.getElementById("user-answer");
  answer = input.value;
  message.textContent = createMessage(answer);
  count = count += 1;
  counter.textContent = count;
});
