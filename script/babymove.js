//homebabymove(.babyactive)
const babyImg = document.querySelector(".home__container__img")

function babymove(){
  // const moveToIntroAt = (babyImg.offsetTop) + ( babyImg.clientHeight / 2 );
const moveToIntroAt = (babyImg.offsetTop) + ( babyImg.clientHeight / 2 );

  if (window.scrollY > moveToIntroAt){
    babyImg.classList.add('babyactive');
  } else{
    babyImg.classList.remove('babyactive');
  }
}

window.addEventListener('scroll',debounce(babymove,5));
