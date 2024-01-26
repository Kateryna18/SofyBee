import noUiSlider from 'nouislider';

//-------------------SLIDER PRICE--------------
// const currentPage = window.location.pathname;

function createSlider(sliderId, inputIds) {
  const slider = document.getElementById(sliderId);
  if (!slider) return;

  const inputs = inputIds.map((id) => document.getElementById(id));

  noUiSlider.create(slider, {
    start: [60, 999],
    connect: true,
    step: 10,
    range: {
      min: [60],
      max: [999],
    },
  });

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;
    slider.noUiSlider.set(arr);
  };

  slider.noUiSlider.on("update", function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });

  inputs.forEach((input, index) => {
    input.addEventListener("change", (event) => {
      console.log(event.currentTarget.value)
      setRangeSlider(index, event.currentTarget.value);
    });
  });
}

const slider1 = document.getElementById("filter-price__range-slider1");
const slider2 = document.getElementById("filter-price__range-slider2");

if (slider1) {
  createSlider("filter-price__range-slider1", ["input-min1", "input-max1"]);
}
if (slider2) {
  createSlider("filter-price__range-slider2", ["input-min2", "input-min2"]);
}