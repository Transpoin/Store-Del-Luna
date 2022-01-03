$('document').ready(function() {
    const $left = $("#left")
    const $right = $("#right")
    const $images = $("#images")
    const $divImage = $(".imglist")

    let currentImageIndex = 0

    $left.on('click', () => {
        currentImageIndex -= 1
        if(currentImageIndex < 0)
        {
            currentImageIndex = $divImage.length - 1
        }
        slideImage()
    });

    $right.on('click', () => {
        currentImageIndex += 1
        if(currentImageIndex >= $divImage.length)
        {
            currentImageIndex = 0
        }
        slideImage()
    });

    function slideImage() {
        const width = $divImage.width()
        const leftmargin = currentImageIndex * -width
        $images.animate({
            'margin-left': leftmargin
        }, 500)
    }
})