document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const mainImg = document.getElementById('main-image');
        mainImg.src = thumbnail.src;
        mainImg.alt = thumbnail.alt;
    });
});