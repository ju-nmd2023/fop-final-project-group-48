export function Menufunction() {
  const menuBtn = document.getElementById("menu-bttn");
  const menu = document.getElementById("menu");
  const closeBtn = document.getElementById("close-bttn");

  menuBtn.addEventListener("click", function (event) {
    console.log("Menu Button Clicked!");

    menu.style.display = "none";
  });

  closeBtn.addEventListener("click", function (event) {
    console.log("Close Button Clicked!");

    menu.style.display = "block";
  });
}

export { Menufunction };
