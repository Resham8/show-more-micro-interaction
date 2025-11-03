const buttonGroup = document.getElementById("buttonGroup");
const moreBtn = document.getElementById("moreBtn");

moreBtn.addEventListener("click", () => {
  buttonGroup.classList.toggle("expanded");
});

document.addEventListener("click", (e) => {
  if (!buttonGroup.contains(e.target)) {
    buttonGroup.classList.remove("expanded");
  }
});
