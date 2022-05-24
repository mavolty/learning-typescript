const button = document.querySelector("button")!;

button.addEventListener("click", () => {
  console.log("Clicked");
});

let isDone;
function sendAnalytics(action: string) {
  console.log(action);
  isDone = true;
}

function clickHandler(message: string) {
  console.log(message);
}

button.addEventListener("click", clickHandler.bind(null, "Clicked"));

function addTwoNumbers(a: number, b: number) {
  if (a + b > 10) {
    return a + b;
  }

  return;
}
