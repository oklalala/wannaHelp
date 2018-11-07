//homebabymove(.babyactive)
const calctotal = document.querySelector(".total");
const moveToResultAt = document.getElementById("calcResult").offsetTop;

function calcmove(){

  if (window.scrollY > moveToResultAt){
    calctotal.classList.add('calcmove');
  } else{
    calctotal.classList.remove('calcmove');
  }
}

window.addEventListener('scroll',debounce(calcmove,5));
