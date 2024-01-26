//----------------COUNT ORDER BLOCK-------------//
const buttonMinus = document.querySelectorAll(".count-block__button-minus");
const countValue = document.querySelectorAll(".count-block__value");
const buttonPlus = document.querySelectorAll(".count-block__button-plus");

const totalPriceSum = document.querySelectorAll(".basket-main__order-total-price");


const ONE_PRICE_PRODUCT = 1999;
// Зберігаємо значення для кожного блоку окремо
const values = Array.from({ length: buttonMinus.length }, () => 1);

buttonMinus.forEach((btnMinus, index) => {
    btnMinus.addEventListener('click', () => {
        if (values[index] === 1) {
            return
        }
        values[index] -=1;
        countValue[index].textContent = values[index];

        if (totalPriceSum[index]) {
            const totalPricValue = Number(values[index]) * Number(ONE_PRICE_PRODUCT);
            totalPriceSum[index].textContent = `€ ${totalPricValue}`;
        }
    })
})

buttonPlus.forEach((btnPlus, index) => {
    btnPlus.addEventListener('click', () => {
        values[index] +=1;
        countValue[index].textContent = values[index];

        if (totalPriceSum[index]) {
            const totalPricValue = Number(values[index]) * Number(ONE_PRICE_PRODUCT);
            totalPriceSum[index].textContent = `€ ${totalPricValue}`;
        }
    })
})