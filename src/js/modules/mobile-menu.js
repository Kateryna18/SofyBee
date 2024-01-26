//-----------------MOBILE MENU------------------------------------
(() => {
  const mobileMenu = document.querySelector(".js-menu-container");
  const openMenuBtn = document.querySelectorAll(".js-open-menu");
  const closeMenuBtn = document.querySelectorAll(".js-close-menu");

  //
  const openTabletMenu = document.querySelector(".header-footer__menu-mob");

  let itemOpenMenuBtn;

  const toggleMenu = () => {
    const isMenuOpen =
      itemOpenMenuBtn.getAttribute("aria-expanded") === "true" || false;
    itemOpenMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");
    if (openTabletMenu) {
      openTabletMenu.classList.toggle("menu-open");
    }

    if (!isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  for (let item of openMenuBtn) {
    item.addEventListener("click", () => {
      itemOpenMenuBtn = item;
      toggleMenu();
    });
  }
  for (let item of closeMenuBtn) {
    item.addEventListener("click", () => toggleMenu());
  }

  window.matchMedia("(min-width: 834px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    itemOpenMenuBtn.setAttribute("aria-expanded", false);
    document.body.classList.remove("no-scroll");
  });
})();

// -------------MOBILE SUBMENU-SEARCH------------
(() => {
  const mobileMenu = document.querySelector(".js-menu2-container");
  const openMenuBtn = document.querySelectorAll(".js-open-menu2");
  const closeMenuBtn = document.querySelectorAll(".js-close-menu2");

  let itemOpenMenuBtn;

  const toggleMenu = () => {
    const isMenuOpen =
    itemOpenMenuBtn.getAttribute("aria-expanded") === "true" || false;
    itemOpenMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");
    itemOpenMenuBtn.classList.toggle("menu-open");

    if (!isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  for (let item of openMenuBtn) {
    item.addEventListener("click", () => {
      itemOpenMenuBtn = item;
      toggleMenu();
    });
  }
  for (let item of closeMenuBtn) {
    item.addEventListener("click", toggleMenu);
  }

  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    itemOpenMenuBtn.setAttribute("aria-expanded", false);
    document.body.classList.remove("no-scroll");
  });
})();


// -------------FILTER-SEARCH------------
(() => {
  const mobileMenu = document.querySelector(".js-filter-container");
  const openMenuBtn = document.querySelectorAll(".js-open-filter-mob");
  const closeMenuBtn = document.querySelectorAll(".js-close-filter-mob");

  let itemOpenMenuBtn;

  const toggleMenu = () => {
    const isMenuOpen =
    itemOpenMenuBtn.getAttribute("aria-expanded") === "true" || false;
    itemOpenMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");
    itemOpenMenuBtn.classList.toggle("menu-open");

    if (!isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  for (let item of openMenuBtn) {
    item.addEventListener("click", () => {
      itemOpenMenuBtn = item;
      toggleMenu();
    });
  }
  for (let item of closeMenuBtn) {
    item.addEventListener("click", toggleMenu);
  }

  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    itemOpenMenuBtn.setAttribute("aria-expanded", false);
    document.body.classList.remove("no-scroll");
  });
})();