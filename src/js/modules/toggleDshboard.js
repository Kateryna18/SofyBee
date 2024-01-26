const tabButtons = document.querySelectorAll('.aside-nav__item');
const tabContents = document.querySelectorAll('.dashboard__content');


tabButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        
        console.log(tabButtons)
        tabButtons.forEach((btn) => {
            btn.classList.remove('active');
        });
        
        e.currentTarget.classList.add("active");

        tabContents.forEach(function(content) {
            content.style.display = 'none';
        });

        const tabId = button.id.replace('Button', '');

        const selectedTab = document.getElementById(tabId);
        if (selectedTab) {
            selectedTab.style.display = 'block';
        }
    });
});
