let navbtn_a = document.querySelectorAll(".nav-btn-a");
let nav_btn_icons = document.querySelectorAll(".nav-btn-icon");
let nav_btn_dropdowns = document.querySelectorAll(".nav-btn-dropdown");
let topsection = document.querySelector(".top-section");
let hamMenu = document.querySelector(".ham-menu");
let hamMenu_ls = document.querySelector(".ham-menu-ls");
let hamMenu_ls_items = document.querySelectorAll(".ham-menu-ls-item");
let hmli_icons = document.querySelectorAll(".hmli-icon");
let hamMenu_ls_item_ls = document.querySelectorAll(".ham-menu-ls-item-ls");
let elements = document.querySelectorAll(".element");
let elementContents = document.querySelectorAll(".element-content");

for (let each of elements) {
  each.addEventListener("click", (event) => {
    elementContents.forEach((elementContent) => {
      elementContent.classList.add("toggle");
    });
    elementContents[event.target.id].classList.toggle("toggle");
  });
}

for (let each of hamMenu_ls_items) {
  each.addEventListener("click", (event) => {
    hamMenu_ls_item_ls.forEach((item) => {
      item.classList.add("toggle");
    });
    hmli_icons.forEach((icon) => {
      icon.classList.remove("transform2");
    });

    hamMenu_ls_item_ls[event.target.id].classList.toggle("toggle");
    hmli_icons[event.target.id].classList.toggle("transform2");
  });
}

for (let each of navbtn_a) {
  each.addEventListener("click", (event) => {
    nav_btn_dropdowns.forEach((dropdown) => {
      dropdown.classList.add("toggle");
    });
    nav_btn_icons.forEach((icon) => {
      icon.classList.remove("transform");
    });

    nav_btn_dropdowns[event.target.id].classList.remove("toggle");
    nav_btn_icons[event.target.id].classList.add("transform");
  });
}

document.addEventListener("click", (event) => {
  if (!event.target.matches(".nav-btn")) {
    nav_btn_dropdowns.forEach((dropdown) => {
      dropdown.classList.add("toggle");
    });
    nav_btn_icons.forEach((icon) => {
      icon.classList.remove("transform");
    });
  }
});

hamMenu.addEventListener("click", () => {
  hamMenu_ls.classList.toggle("toggle");
});
