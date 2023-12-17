const open = document.querySelector(".open");
const close = document.querySelector(".close");
const dialog = document.querySelector("dialog");

open.addEventListener("click", () => {
  open.style.display = "none";
  dialog.showModal();
});

close.addEventListener("click", () => {
  dialog.close();
  open.style.display = "block";
});
