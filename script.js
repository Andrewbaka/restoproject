const closeBtn = document.querySelector('.sale-close-btn');
const hideBlock = document.querySelector('.above-header');

if (closeBtn && hideBlock) {
    closeBtn.addEventListener('click', () => {
        hideBlock.style.display = 'none'; 
    });
}