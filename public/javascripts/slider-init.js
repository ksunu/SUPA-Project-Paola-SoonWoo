new Glide('.glide', {
    perView: 3,
    gap: 70,
    autoplay: 3000,
    breakpoints: {
        1000: {
            perView: 2
        },
        600: {
            perView: 1
        }
    }
}).mount()