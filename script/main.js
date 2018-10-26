// debounce
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }



// cost-result reference
const reference = document.querySelector('.reference');
const referenceText = document.querySelector('.reference__text');
const referenceList = document.querySelector('.reference__list');

function changePage(e) {
    // console.log(e);
}

function openLinks(e) {
    if (e.target.matches('.reference__text')) {
        referenceList.classList.add('reference__list__active');
        e.target.style.cursor = 'auto';
        reference.style.paddingBottom = '25px';
    } else if (e.target.matches('input[type="checkbox"]')) {
        referenceList.classList.remove('reference__list__active');
        referenceText.style.cursor = 'pointer';
        reference.style.paddingBottom = '0';
    }


}

reference.addEventListener('click', openLinks);
// window.addEventListener('scroll', debounce(changePage));

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}

//homebabymove(.babyactive)
const babyImg = document.querySelector(".home__container__img")

function babymove(){
  // const moveToIntroAt = (babyImg.offsetTop) + ( babyImg.clientHeight / 2 );
const moveToIntroAt = (babyImg.offsetTop) + ( babyImg.clientHeight );
  console.log(window.scrollY);
  if (window.scrollY > moveToIntroAt){
    babyImg.classList.add('babyactive');
  } else{
    babyImg.classList.remove('babyactive');
  }
}

window.addEventListener('scroll',debounce(babymove,5));
