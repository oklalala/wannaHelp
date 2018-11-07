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
        document.querySelector('label[for="reference__toggle__checkbox"]').style.display = 'inline';
    } else if (e.target.matches('input[type="checkbox"]')) {
        referenceList.classList.remove('reference__list__active');
        referenceText.style.cursor = 'pointer';
        reference.style.paddingBottom = '0';
        document.querySelector('label[for="reference__toggle__checkbox"]').style.display = 'none';
    }


}

reference.addEventListener('click', openLinks);
// window.addEventListener('scroll', debounce(changePage))


// period change tab in bmi section
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
} 
