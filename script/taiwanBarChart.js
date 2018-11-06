
// // get barchart taiwan data
// var taiwanDeathRate = "https://open-data-220705.appspot.com/api/death_rate";
// var xhrTaiwanDeathRate = new XMLHttpRequest();
// var taiwanDeathRateData = [['county', 'deathRate']];
// xhrTaiwanDeathRate.open("POST", "taiwanDeathRate", true);
// xhrTaiwanDeathRate.setRequestHeader("Content-type", "application/json");
// xhrTaiwanDeathRate.send(JSON.stringify({
//   type: "newborn",
//   year: 2017
// }));

// xhrTaiwanDeathRate.onreadystatechange = function () {
//   // console.log(this.readyState);
//   if (this.readyState === 4 && this.status === 200) {
//     var rowDeathRate = JSON.parse(this.responseText);
//     // console.log(rowDeathRate, 111111111111);
//     var count = 0;
//     for (key in rowDeathRate.response) {
//       taiwanDeathRateData[count++ + 1] = [key, rowDeathRate.response[key]];
//     }
//     // console.log(taiwanDeathRateData, 99999999999999);
//   }
// }

// get barchart global data
var globalDeathRate = "https://open-data-220705.appspot.com/api/global_death_rate/2016";
var xhrGlobalDeathData = new XMLHttpRequest();
var globalDeathData = [['Country', '死亡率']];
xhrGlobalDeathData.open('GET', globalDeathRate, true);
xhrGlobalDeathData.send();

xhrGlobalDeathData.onreadystatechange = function () {
  // console.log( this.readyState);
  if (this.readyState === 4 && this.status === 200) {
    var apiDeathData = JSON.parse(this.responseText);
    // console.log(apiDeathData,111111111111);
    var count = 0;
    for (key in apiDeathData.response) {
      var value = apiDeathData.response[key]
      globalDeathData[count++ + 1] = [key, value];
    }
    // console.log(globalDeathData, 99999999999999);    
  }
}

google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawMultSeries);

function drawMultSeries() {
  var data = new google.visualization.arrayToDataTable(globalDeathData);

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
    legend: { position: "none" },
    fontSize: 8
  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById('chart__taiwan'));

  chart.draw(data, options);
}
