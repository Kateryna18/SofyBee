const productFeedback = document.querySelector(
  ".product-feedbacks__form-rating-block"
);

if (productFeedback) {
  const ratingIcons = productFeedback.querySelectorAll(".rate-stars__icon");

  ratingIcons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
      console.log("first");

      ratingIcons.forEach((ratingIcon, i) => {
        if (i <= index) {
          ratingIcon.classList.add("active");
        } else {
          ratingIcon.classList.remove("active");
        }
      });
    });
  });
}
