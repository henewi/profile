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