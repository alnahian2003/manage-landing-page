window.addEventListener('load', function () {
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 3,
        slidesToScroll: 3,
        draggable: true,
        duration: 0.5,
        dragVelocity: 1,
        responsive: [{
            // screens greater than >= 100px
            breakpoint: 100,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: '1',
                slidesToScroll: '2',
            }
        }, {
            // screens greater than >= 1024px
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }]
    });
})