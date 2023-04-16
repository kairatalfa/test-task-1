const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("#timer");

const createTimerAnimator = () => {
  let intervalId;

  return (seconds) => {
    clearInterval(intervalId);
    let remainingTime = seconds;
    intervalId = setInterval(() => {
      remainingTime--;
      if (remainingTime < 0) {
        clearInterval(intervalId);
        timerEl.textContent = "00:00:00";
      } else {
        const hours = Math.floor(remainingTime / 3600);
        const minutes = Math.floor((remainingTime % 3600) / 60);
        const seconds = remainingTime % 60;
        timerEl.textContent = `${String(hours).padStart(2, "0")}:${String(
          minutes
        ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  inputEl.value = inputEl.value.replace(/\D/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = "";
});
