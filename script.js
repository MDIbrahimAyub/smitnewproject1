document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        item.parentNode.classList.toggle('active');
    });
});