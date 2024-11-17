// Enable horizontal swipe for card sliders
document.querySelectorAll('.card-slider').forEach(slider => {
    slider.addEventListener('wheel', (e) => {
        e.preventDefault();
        slider.scrollBy({
            left: e.deltaY < 0 ? -100 : 100,
            behavior: 'smooth'
        });
    });
});
