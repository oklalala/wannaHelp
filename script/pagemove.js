//short page
const sectionHome = document.querySelectorAll('section')[0];
const sectionIntro = document.querySelectorAll('section')[1];
const sectionQuestionBaby = document.querySelectorAll('section')[2];
const sectionQuestionPregnancy = document.querySelectorAll('section')[4];
const sectionQuestionCost = document.querySelectorAll('section')[7];

//long page
const sectionBmi = document.querySelectorAll('section')[3];
const sectionDeath = document.querySelectorAll('section')[5];
const sectionSafety = document.querySelectorAll('section')[6];
const sectionCalc = document.querySelectorAll('section')[8];
const sectioncalcResult = document.querySelectorAll('section')[9];

//100vh
const fullVh = sectionHome.clientHeight;
var pageType = null;


var onethingdo = null;

function pagemove() {
  console.log(window.scrollY);
  var current = null;
  // var pageType = null;
  //現在是否有對象正在移動，有的話先別觸發其他的
  if(onethingdo !== null){
    return;
  }

  //對象是誰
  if((sectionHome.offsetTop < window.scrollY) && (window.scrollY < sectionHome.offsetTop + sectionHome.clientHeight)){
    current=sectionHome;
    pageType="short";
  }else if ((sectionIntro.offsetTop < window.scrollY) && (window.scrollY < sectionIntro.offsetTop + sectionIntro.clientHeight)) {
    current=sectionIntro;
    pageType="short";
  }else if ((sectionQuestionBaby.offsetTop < window.scrollY) && (window.scrollY < sectionQuestionBaby.offsetTop + sectionQuestionBaby.clientHeight)) {
    current=sectionQuestionBaby;
    pageType="short";
  }else if ((sectionQuestionPregnancy.offsetTop < window.scrollY) && (window.scrollY < sectionQuestionPregnancy.offsetTop + sectionQuestionPregnancy.clientHeight)) {
    current=sectionQuestionPregnancy;
    pageType="short";
  }else if ((sectionQuestionCost.offsetTop < window.scrollY) && (window.scrollY < sectionQuestionCost.offsetTop + sectionQuestionCost.clientHeight)) {
    current=sectionQuestionCost;
    pageType="short";
  }else if ((sectionBmi.offsetTop + sectionBmi.clientHeight - fullVh < window.scrollY) && (window.scrollY < sectionBmi.offsetTop + sectionBmi.clientHeight)) {
    current=sectionBmi;
    pageType="long";
  }else if ((sectionDeath.offsetTop + sectionDeath.clientHeight - fullVh < window.scrollY) && (window.scrollY < sectionDeath.offsetTop + sectionDeath.clientHeight)) {
    current=sectionDeath;
    pageType="long";
  }else if ((sectionSafety.offsetTop + sectionSafety.clientHeight - fullVh < window.scrollY) && (window.scrollY < sectionSafety.offsetTop + sectionSafety.clientHeight)) {
    current=sectionSafety;
    pageType="long";
  }else if ((sectionCalc.offsetTop + sectionCalc.clientHeight - fullVh < window.scrollY) && (window.scrollY < sectionCalc.offsetTop + sectionCalc.clientHeight)) {
    current=sectionCalc;
    pageType="long";
  }else if ((sectioncalcResult.offsetTop + sectioncalcResult.clientHeight - fullVh < window.scrollY) && (window.scrollY < sectioncalcResult.offsetTop + sectioncalcResult.clientHeight)) {
    current=sectioncalcResult;
    pageType="long";
  }else{
    return;
  }

  //對象要向上還是向下(shortpage)
  if(pageType == "short"){
    if (window.scrollY < (current.offsetTop + (current.clientHeight / 2))) {
      if((current.offsetTop) < window.scrollY){
        onethingdo = "down";
        downmove(current);
      }
    } else if ((current.offsetTop + (current.clientHeight / 2)) < window.scrollY) {
      if(window.scrollY < (current.offsetTop + current.clientHeight)){
        onethingdo = "up";
        upmove(current);
      }
    }
  }

  //對象要向上還是向下(longpage)
  if(pageType == "long"){
    if (window.scrollY < (current.offsetTop + current.clientHeight - (0.5 * fullVh))) {
      if((current.offsetTop + current.clientHeight - 0.9 * fullVh) < window.scrollY){
        onethingdo = "down";
        downmove(current);
      }
    }
    else if ((current.offsetTop + current.clientHeight - (0.5 * fullVh)) < window.scrollY) {
      if(window.scrollY < (current.offsetTop + current.clientHeight)){
        onethingdo = "up";
        upmove(current);
      }
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
    var upBreakPoint = currnt.offsetTop;
    // if(pageType == "long"){
    //   upBreakPoint = currnt.offsetTop + currnt.clientHeight - fullVh;
    // }
    var everysecondrun = currnt.clientHeight / 50;
    var upclock = setInterval(runUp, 10);
    function runUp(){
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
