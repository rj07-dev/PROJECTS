$(document).ready(function () {
    const today = new Date();
    const halloween = new Date(today.getFullYear(), 9, 31);

    if (today > halloween) {
        halloween.setFullYear(halloween.getFullYear() + 1);
    }

    const oneDay = 24 * 60 * 60 * 1000;
    const days = Math.ceil((halloween - today) / oneDay);

    $("footer").html(`<p>&copy; 2018 Ben Murach</p><p>${days} days until Halloween!</p>`);
});