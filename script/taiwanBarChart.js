// get barchart taiwan data
var taiwanDeathRate = "https://open-data-220705.appspot.com/api/death_rate";
var xhrTaiwanDeathRate = new XMLHttpRequest();
var taiwanDeathRateData = [['county', 'deathRate']];
xhrTaiwanDeathRate.open("POST", taiwanDeathRate);
xhrTaiwanDeathRate.setRequestHeader("Content-type", "application/json");
xhrTaiwanDeathRate.send(JSON.stringify({
  type: "newborn",
  year: 2017
}));

xhrTaiwanDeathRate.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    var rowDeathRate = JSON.parse(this.responseText);
    console.log(rowDeathRate, 111111111111);
    var count = 0;
    for (key in rowDeathRate.data) {
      taiwanDeathRateData[count++ + 1] = [key, rowDeathRate.data[key]];
    }
    console.log(taiwanDeathRateData.pop(), 99999999999999);
  }
}

google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawMultSeries);

function drawMultSeries() {
  var data = new google.visualization.arrayToDataTable(taiwanDeathRateData);

  var options = {
    hAxis: {
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
