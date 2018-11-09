var xhrGlobalDeathData = new XMLHttpRequest();
var globalDeathData = [['Country', '死亡率']];

function getGlobal() {
  //  讀取radio的值
  var form = document.getElementById("global__year");
  for (var i = 0; i < form.year.length; i++) {
    if (form.year[i].checked) {
      var year = form.year[i].value;
    }
  }
  // console.log(year)
  return renewGlobalDraw(year);
}

function sendGet(year) {
  // get barchart global data
  var globalDeathRate = "https://open-data-220705.appspot.com/api/global_death_rate/" + year;
  xhrGlobalDeathData.open('GET', globalDeathRate, true);
  xhrGlobalDeathData.send();

  xhrGlobalDeathData.onreadystatechange = function () {
    // console.log( this.readyState);
    if (this.readyState === 4 && this.status === 200) {
      var apiDeathData = JSON.parse(this.responseText);
      // console.log(apiDeathData,111111111111);
      var count = 0;
      globalDeathData = [['Country', '死亡率']];
      for (key in apiDeathData.response) {
        var value = apiDeathData.response[key]
        globalDeathData[count++ + 1] = [key, value];
      }
      // console.log(globalDeathData, 99999999999999);    
    }
  }
  return globalDeathData;
}

// 把圖重新畫
function renewGlobalDraw(year) {
  var data = sendGet(year);
  // console.log(data, "this is data");
  google.charts.load('current', { packages: ['corechart', 'bar'] });
  google.charts.setOnLoadCallback(drawGlobalBarChart(data));
  // drawMultSeries(data);
}

function drawGlobalBarChart(setData) {
  console.log(setData, "daadadaaadaa");
  var data = new google.visualization.arrayToDataTable(setData);
  console.log(data, "global hahahahaaha");
  var options = {
    hAxis: {
      // title: '世界各國'
    },
    vAxis: {
    },
    chartArea: {
      top: 50,
      weight: '90%'
    },
    colors: ['#ed6555'],
    backgroundColor: '#fff7e2',
    legend: {
      position: "none",
      fontSize: 19
    },
    fontSize: 8
  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById('chart__global'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}

// // hover can change bar color
// function createCustomHTMLContent(htmlText) {
//   return '<span class="tooltip"><strong>' + htmlText + '</strong></div>';
// }
