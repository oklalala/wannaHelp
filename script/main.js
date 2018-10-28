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

//google pie chart
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['reson', 'count'],
    ['先天性畸形、變形及染色體異常',     10],
    ['源於周產期的呼吸性疾患',      2],
    ['與妊娠長短及胎兒生長有關疾病',  2],
    ['事故傷害', 2],
    ['特發於周產期感染',    8],
    ['嬰兒猝死症候群',    7],
    ['胎兒及新生兒出血及血液疾患',    13],
    ['肺炎',    7],
    ['心臟疾病',    10],
    ['腦汁其他疾患',    7],
    ['其他',    11],
  ]);

  var options = {
    width: 379,
    height: 379,
    backgroundColor:{
      fill: '#fff7e2',
    },
    //調整整塊區域的位置
    chartArea:{
      // left:10,
      // top:10,
      width: 379,
      height: 379,
    },
    fontSize:'15',
    //說明圖標相關調整
    legend:{
      position: 'none',
      // alignment:'end',
      // maxLines:6,
      // textStyle:{
      //   color:'#ed6555',
      // },
      // width: 100,
    },
    pieSliceText:'none',
    //圓餅圖切片顏色
    slices:{
      0: {color: '#ed6555'},
      1: {color: '#50e3c2'},
      2: {color: '#f5a623'},
      3: {color: '#b8e986'},
      4: {color: '#ffcc01'},
      5: {color: '#2ebb86'},
      6: {color: '#bc6cca'},
      7: {color: '#6fa8eb'},
      8: {color: '#633ebb'},
      9: {color: '#0082c3'},
      10: {color: '#9b9b9b'},
    },
    //提示標籤的相關設定
    tooltip:{
      textStyle: {color: '#4a4a4a'},
      showColorCode: true,
    }
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}
