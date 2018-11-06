// // $.get('https://open-data-220705.appspot.com/api/global_death_rate/2016', function (e) {
// //   console.log(e);
  
// // });

// get barchart global data
var globalDeathRate = "https://open-data-220705.appspot.com/api/global_death_rate/2016";
var xhrGlobalDeathData = new XMLHttpRequest();
var globalDeathData = [['Country', 'DeathRate']];
xhrGlobalDeathData.open('GET', globalDeathRate, true);
xhrGlobalDeathData.send();

xhrGlobalDeathData.onreadystatechange = function () {
  console.log( this.readyState);
  if (this.readyState === 4 && this.status === 200) {
    var apiDeathData = JSON.parse(this.responseText);
    console.log(apiDeathData,111111111111);
    var count = 0;
    for  ( key in apiDeathData.response ) {
      globalDeathData[count++ +1] = [key, apiDeathData.response[key]];
    }
    console.log(globalDeathData, 99999999999999);    
  }
}


google.charts.load('current', { packages: ['corechart','bar'] });
google.charts.setOnLoadCallback(drawBarChart);

function drawBarChart() {
  var data = new google.visualization.arrayToDataTable(globalDeathData);

  var options = {
    hAxis: {
      title: '世界各國'
    },
    vAxis: {
    }
  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById('chart__global'));

  chart.draw(data, options);
}
