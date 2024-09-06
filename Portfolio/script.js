document.addEventListener('DOMContentLoaded', function() {
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        var items = document.querySelectorAll('.timeline-item');
        items.forEach(function(item) {
            if (isElementInViewport(item)) {
                item.classList.add('visible');
            }
        });
    }

    window.addEventListener('load', handleScroll);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
});