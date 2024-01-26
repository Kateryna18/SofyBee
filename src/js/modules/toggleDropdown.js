function toggleCatalogItem(button, catalog, iconPlus, iconMinus) {
  button.addEventListener("click", (e) => {

      if (!catalog.classList.contains("is-open")) {
        catalog.classList.add("is-open");
        if (iconMinus) {
          iconPlus.style.display = "none";
          iconMinus.style.display = "block";
        }
      } else {
        catalog.classList.remove("is-open");
        if (iconPlus) {
          iconMinus.style.display = "none";
          iconPlus.style.display = "block";
        }
      }
  });
}

export default toggleCatalogItem;
