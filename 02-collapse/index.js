const collapsContent = document.querySelector(".collapsible__content");
const collapsBtn = document.querySelector(".collapsible__button");

function showHideFunc() {
  if (collapsContent.style.display !== "none") {
    collapsContent.style.display = "none";
  } else {
    collapsContent.style.display = "block";
  }
}
collapsBtn.addEventListener("click", showHideFunc);
