const sectionHome = document.querySelectorAll('section')[0];
const sectionIntro = document.querySelectorAll('section')[1];
const sectionQuestionBaby = document.querySelectorAll('section')[2];
const sectionQuestionPregnancy = document.querySelectorAll('section')[4];
const sectionQuestionCost = document.querySelectorAll('section')[7];


var onethingdo = null;

function pagemove() {
  var current = null;
  //現在是否有對象正在移動，有的話先別觸發其他的
  if(onethingdo !== null){
    return;
  }

  //對象是誰
  if((sectionHome.offsetTop < window.scrollY) && (window.scrollY < sectionHome.offsetTop + sectionHome.clientHeight)){
    current=sectionHome;
  }else if ((sectionIntro.offsetTop < window.scrollY) && (window.scrollY < sectionIntro.offsetTop + sectionIntro.clientHeight)) {
    current=sectionIntro;
  }else if ((sectionQuestionBaby.offsetTop < window.scrollY) && (window.scrollY < sectionQuestionBaby.offsetTop + sectionQuestionBaby.clientHeight)) {
    current=sectionQuestionBaby;
  }else if ((sectionQuestionPregnancy.offsetTop < window.scrollY) && (window.scrollY < sectionQuestionPregnancy.offsetTop + sectionQuestionPregnancy.clientHeight)) {
    current=sectionQuestionPregnancy;
  }else if ((sectionQuestionCost.offsetTop < window.scrollY) && (window.scrollY < sectionQuestionCost.offsetTop + sectionQuestionCost.clientHeight)) {
    current=sectionQuestionCost;
  }else{
    return;
  }

  //對象要向上還是向下
  if (window.scrollY < (current.offsetTop + (current.clientHeight / 2))) {
    if((current.offsetTop) < window.scrollY){
      onethingdo = "down";
      downmove(current);
    }
  } else if ((current.offsetTop+(current.clientHeight / 2)) < window.scrollY) {
    if(window.scrollY < (current.offsetTop + current.clientHeight)){
      onethingdo = "up";
      upmove(current);
    }
  }
}

function downmove(currnt) {
  var downBreakPoint = currnt.offsetTop + currnt.clientHeight;
  var everysecondrun = currnt.clientHeight / 50;
  var downclock = setInterval(runDown, 10);
  function runDown() {
    var topvalue = window.scrollY + everysecondrun;
    if (topvalue > (downBreakPoint)) {
      topvalue = downBreakPoint;
      window.scrollTo({
        top: topvalue,
      });
      cleardownmove();
    } else {
      window.scrollTo({
        top: topvalue,
      });
    }
  }
  function cleardownmove() {
    onethingdo = null;
    clearInterval(downclock);
  }
}

function upmove(currnt) {
    console.log("upmove");
    var upBreakPoint = currnt.offsetTop;
    var everysecondrun = currnt.clientHeight / 50;
    var upclock = setInterval(runUp, 10);
    function runUp(){
      console.log("uprun");
      var topvalue = window.scrollY - everysecondrun;
      if (topvalue < (upBreakPoint)) {
        topvalue = upBreakPoint;
        window.scrollTo({
          top: topvalue,
        });
        clearupmove();
      } else {
        window.scrollTo({
          top: topvalue,
        });
      }
    }
    function clearupmove() {
      onethingdo = null;
      clearInterval(upclock);
    }
}

document.addEventListener('scroll', debounce(pagemove, 5));
