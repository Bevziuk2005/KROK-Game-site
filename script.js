const burgerIcon = document.getElementById('burger-icon');
const modal = document.getElementById('modal');


burgerIcon.addEventListener('click', () => {
    modal.style.display = 'block';
});


modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
