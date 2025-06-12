const overlay = document.getElementById("overlay");
const switchImg = document.getElementById("switch");
const room = document.getElementById("room");

let lightOn = false;

document.addEventListener("mousemove", (e) => {
  if (!lightOn) {
    overlay.style.setProperty("--x", `${e.clientX}px`);
    overlay.style.setProperty("--y", `${e.clientY}px`);
  }
});

switchImg.addEventListener("click", () => {
  lightOn = !lightOn;

  if (lightOn) {
    overlay.style.display = "none";
    document.body.classList.add("light-mode");
    room.classList.add("light-mode");
    switchImg.src = "switch_ON.png";

  } else {
    overlay.style.display = "block";
    document.body.classList.remove("light-mode");
    room.classList.remove("light-mode");
    switchImg.src = "switch_off.png";

      // ランダムに位置を変更（ONのときだけ）
    randomizeSwitchPosition();
  }
});

function randomizeSwitchPosition() {
  const maxX = window.innerWidth - switchImg.offsetWidth;
  const maxY = window.innerHeight - switchImg.offsetHeight;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  switchImg.style.left = `${randomX}px`;
  switchImg.style.top = `${randomY}px`;
  switchImg.style.position = "absolute";
}
