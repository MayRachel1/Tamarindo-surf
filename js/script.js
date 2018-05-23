function copyCode(x) {
    var copyText = document.getElementById(x);
    copyText.select();
    document.execCommand("Copy");
}

function myFunction(x) {
    x.classList.toggle("change");
}

$('.cont_bars').click(function() {
    $('nav').toggle(1000);
});