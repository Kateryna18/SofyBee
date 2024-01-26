const checkboxItems = document.querySelectorAll('.filter__checkbox-item');

if (checkboxItems.length) {
    checkboxItems.forEach(item => {
        item.addEventListener('click', function () {
          item.classList.toggle('active');
        });
      });
}