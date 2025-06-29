// adding product filtering feature to our product listing page

// Get category from URL
function getCategoryFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('category');
}

function filterByCategory(selected) {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        if (!selected || card.dataset.category === selected) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    document.querySelectorAll('.filter-btn').forEach(b => {
        if (b.getAttribute('data-category') === selected) {
            b.classList.add('bg-purple-600', 'text-white');
        } else {
            b.classList.remove('bg-purple-600', 'text-white');
        }
    });
}

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const selected = btn.getAttribute('data-category');
        filterByCategory(selected);
    });
});

// On page load, filter by category from URL if present
const urlCategory = getCategoryFromURL();
if (urlCategory) {
    filterByCategory(urlCategory);
}