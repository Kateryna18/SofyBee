const stepsBookBuilder = document.querySelectorAll(".order-builder__step");

if (stepsBookBuilder.length) {
  stepsBookBuilder.forEach((step, index) => {
    const chooseButtons = step.querySelectorAll(
      ".order-builder__step-button-variant"
    );

    if (chooseButtons.length) {
      chooseButtons.forEach((chooseButton) => {
        chooseButton.addEventListener("click", (e) => {
          chooseButtons.forEach((button) =>
            button.classList.remove("selected")
          );
          handleChoosenVariant(e, index);
        });
      });
    }
  });
}

function handleChoosenVariant(event, index) {
  const choosenButton = event.currentTarget;
  choosenButton.classList.add("selected");
  const valueForm = event.currentTarget.querySelector(
    ".step-button-variant__value"
  );
  const resultInfoPositions = document.querySelectorAll(
    ".order-builder__result-info-position"
  );

  if (resultInfoPositions.length > index) {
    const resultInfoPosition = resultInfoPositions[index];
    const resultValueBlock = resultInfoPosition.querySelector(
      ".result-info-position__value"
    );
    const containerResultValueBlock = resultValueBlock.parentNode;
    containerResultValueBlock.classList.toggle("active");

    if (resultValueBlock) {
      resultValueBlock.textContent = valueForm.textContent;
    }
  }
}