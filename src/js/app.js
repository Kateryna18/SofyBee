import Notiflix from "notiflix";

import * as flsFunctions from "./modules/functions.js";
// SWIPERS
import "./modules/swipers/swiper-one.js";
import "./modules/swipers/swiper-two.js";
import "./modules/swipers/swiper-four.js";
import "./modules/swipers/swiper-five.js";
import "./modules/swipers/swiper-six.js";
import "./modules/swipers/swiper-seven.js";
// TOGGLE DROPDOWN
import toggleCatalogItem from "./modules/toggleDropdown.js";
// MOBILE MENU
import "./modules/mobile-menu.js";
//COUNT ORDER BLOCK
import "./modules/count-order-product.js";
//SLIDER PRICE
import "./modules/sliderPrice.js";
// CUSTOM CHECKBOX
import "./modules/checkboxCustom.js";
//BOOK BUILDER
import "./modules/buildOrder.js";
// TOGLE RARING
import "./modules/toggleRatingStars.js";
// TOGGLE DASHBOARD
import "./modules/toggleDshboard.js";

flsFunctions.isWebp();

//----------------FAQ SECTION-------------//
const buttonsFaqSection = document.querySelectorAll(".faq__button-wrapper");

const catalogsFaqSection = document.querySelectorAll(".faq__item");
const iconsFaqSectionPlus = document.querySelectorAll(".faq-block__icon.plus");
const iconsFaqSectionMinus = document.querySelectorAll(
  ".faq-block__icon.minus"
);

buttonsFaqSection.forEach((button, index) => {
  toggleCatalogItem(
    button,
    catalogsFaqSection[index],
    iconsFaqSectionPlus[index],
    iconsFaqSectionMinus[index]
  );
});

//----------------FOOTER SECTION-------------//
const buttonsFooterMenu = document.querySelectorAll(".footer__nav-menu-button");
const catalogsFooterMenu = document.querySelectorAll(".footer__nav-menu-block");

buttonsFooterMenu.forEach((button, index) => {
  toggleCatalogItem(button, catalogsFooterMenu[index]);
});

//----------------BUILDER STEPS SECTION-------------//
const buttonsStepToggle = document.querySelectorAll(
  ".order-builder__step-head"
);
const catalogsStep = document.querySelectorAll(".order-builder__step");

buttonsStepToggle.forEach((button, index) => {
  toggleCatalogItem(button, catalogsStep[index]);
});

//----------------ORDER HISTORY ITEM SECTION-------------//
const buttonsOrderHistoryToggle = document.querySelectorAll(
  ".order-history__item-button-toggle"
);
const catalogsOrderHistory = document.querySelectorAll(".order-history__item");

buttonsOrderHistoryToggle.forEach((button, index) => {
  toggleCatalogItem(button, catalogsOrderHistory[index]);
});

//----------------CHECKOUT ORDER STEP SECTION-------------//
const buttonsCheckoutOrderToggle = document.querySelectorAll(
  ".checkout-order__step-head"
);
const catalogsOrderCheckout = document.querySelectorAll(
  ".checkout-order__step"
);

buttonsCheckoutOrderToggle.forEach((button, index) => {
  toggleCatalogItem(button, catalogsOrderCheckout[index]);
});

//----------------SELECT-------------//
const buttonsSelect = document.querySelectorAll(".select__button");
const catalogsSelet = document.querySelectorAll(".select");

buttonsSelect.forEach((button, index) => {
  toggleCatalogItem(button, catalogsSelet[index]);
});

//----------------FILTER TOGGLE-------------//
const buttonsTogleFilter = document.querySelectorAll(".filter-item__head");
const contentFilter = document.querySelectorAll(".filter__block-item");

buttonsTogleFilter.forEach((button, index) => {
  toggleCatalogItem(button, contentFilter[index]);
});

//----------------INFO BLOCK-------------//
function toggleClass(element) {
  element.classList.add("hidden");
}

const topHeaderButtons = document.querySelectorAll(".top-header__button");
const topHeaderNews = document.querySelectorAll(".top-header");
if (topHeaderButtons.length) {
  topHeaderNews.forEach((topHeaderNew) =>
    topHeaderNew.addEventListener("click", () => toggleClass(topHeaderNew))
  );
}
