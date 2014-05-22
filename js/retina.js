$(window).ready(function() {
    processRetinaImages();
});

function processRetinaImages() {
    var isRetina = window.devicePixelRatio > 1;

    $("img:not(.no-retina-version)").each(function(i, el) {

        if ($(el).attr("src") == null)
            return

        var newImg = $(new Image());
        var newSrc =
        $(el).attr("src").substring(0, $(el).attr("src").lastIndexOf(".")) + "@2x" +
        $(el).attr("src").substring($(el).attr("src").lastIndexOf("."), $(el).attr("src").length);


        $(newImg).on("load", function() {

            $("body").append($(newImg).css({opacity: 0, position: "absolute"}))

        var width = $(el).width();
        var height = $(el).height();
        
        if (width == 0 || height == 0) {
            width = newImg.width() /2;
            height = newImg.height() /2;
        }

            $(el).css({
                width: width,
                height: height
            });

            $(newImg).remove();

            $(el).attr("src", newSrc)
        })

    newImg.attr("src", newSrc);
})
}
