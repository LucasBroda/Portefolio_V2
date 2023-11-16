
document.addEventListener('DOMContentLoaded', function () {

    var elementsToReveal = document.querySelectorAll('.reveal');
  

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
      elementsToReveal.forEach(function (element) {
        if (isElementInViewport(element)) {
          element.classList.add('visible');
        }
      });
    }
  
    window.addEventListener('scroll', handleScroll);
  
    handleScroll();
  });