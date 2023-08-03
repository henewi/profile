// PRELOADER SECTION // 

const fadeOut = () => {
    const loaderWrapper =
    document.querySelector('.wrapper');
    loaderWrapper.classList.add('fade');
}

window.addEventListener('load', fadeOut);

// STARS SECTION //

function stars(){
    const count = 200;
    const section = document.querySelector('section');
    var i = 0;

    while (i < count){
        const star = document.createElement('i');
        const x = Math.floor(Math.random() * window.innerWidth)
        const y = Math.floor(Math.random() * window.innerHeight)

        const size = Math.random() * 4;
        star.style.left = x+'px';
        star.style.top = y+'px';
        star.style.width = 1+size+'px';
        star.style.height = 1+size+'px';

        const duration = Math.random() * 2;

        star.style.animationDuration = 2+duration+'s';
        star.style.animationDelay = duration+'s';

        section.appendChild(star);
        i++
    }
}
stars();

//Scrolling //

const container = document.querySelector('.pagescontainer');
const items = document.querySelectorAll('.page');

container.addEventListener('wheel', (event) => {
  event.preventDefault();
  const delta = event.deltaY;

  container.scrollBy({
    top: delta,
    behavior: 'smooth'
  });
});

// Animated Scroll boxes //

function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
     console.log (
     rect.top >= 0 &&
     rect.left >= 0 &&
     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
     /**/
    return (
     rect.top >= 0 &&
     rect.left >= 0 &&
     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
   }
   
   var elements = document.querySelectorAll(".pagetitle");
   //Get All Elements With The Class
    
   function viewportChecker() {
     //Loop Through All Elements
    for (var i = 0; i < elements.length; i++) {
      if (isElementInViewport(elements[i])) {
        //Add CSS Class If Visible
        elements[i].classList.add("visible");
   }
     else { 
      /* Removes Elements When Not In Viewport */
      elements[i].classList.remove("visible");
     }
    }
   }
    
   window.addEventListener("load", viewportChecker);
   window.addEventListener("scroll", viewportChecker);