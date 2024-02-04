function toggleBlock() {
  var block = document.querySelector(".artists-2-block");
  var button = document.querySelector(".btn-mooore");

  if (block.style.display === "none" || block.style.display === "") {
    block.style.display = "flex";
    button.textContent = "Показати меньше";
  } else {
    block.style.display = "none";
    button.textContent = "Показати більше";
  }
}
