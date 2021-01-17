(function () {
    var elements;
    var windowHeight;

    function init() {
        elements = document.querySelectorAll('.hidden');
        windowHeight = window.innerHeight;
    }

    function checkPosition() {
        // console.log("scroll-checkposition");
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var positionFromTop = elements[i].getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= -100) {
                if (element.id == 'type') { element.classList.add('typing'); }
                else { element.classList.add('fade-in-element'); }
                element.classList.remove('hidden');
            }
        }
    }
    var parralax = document.getElementById("parralax");
    parralax.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
    init();
    checkPosition();
})();

function Filter(filter) {
    $(".all:visible").fadeOut(350, "linear").promise().done(function () {
        $("." + filter).fadeIn(400);
    });
    updateButtons(filter);
}

function updateButtons(filter) {
    var elements = document.querySelectorAll(".filterButton");
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].id == filter) {
            elements[i].classList.remove("filterUnselected");
            elements[i].classList.add("filterSelected");
        }
        else {
            elements[i].classList.remove("filterSelected");
            elements[i].classList.add("filterUnselected");
        }
    }
}

window.onload = function () {
    Filter("all");
}

$(".imageContainer").hover(function () {
    // console.log("hovered");
    $(this).find(".itemInfo").css("opacity", "100%");
}, function () {
    $(this).find(".itemInfo").css("opacity", "0%");
});

$(window).resize(function () {
    var newHeight = $(".imageContainer").width() * (9 / 16)
    $(".imageContainer").height(newHeight);
    // console.log($(".imageContainer").height());

    if ($(window).width() < 1500) {
        $(".wrapper").css("padding-left", "10%");
        $(".wrapper").css("padding-right", "10%");
    }
    else {
        $(".wrapper").css("padding-left", "20%");
        $(".wrapper").css("padding-right", "20%");
    }
});