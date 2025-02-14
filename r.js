script file script.js
function filterGallery(category) {
    let images = document.querySelectorAll('.photo');

    images.forEach(img => {
        if (category === 'all') {
            img.classList.remove('hidden');
        } else {
            if (img.classList.contains(category)) {
                img.classList.remove('hidden');
            } else {
                img.classList.add('hidden');
            }
        }
    });
}
