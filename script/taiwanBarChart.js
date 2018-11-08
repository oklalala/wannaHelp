// get barchart taiwan data
var taiwanDeathRate = "https://open-data-220705.appspot.com/api/death_rate";
var xhrTaiwanDeathRate = new XMLHttpRequest();
var taiwanDeathRateData = [['county', '死亡率']];

// 送出 Post
function sendPost(type, year){
  xhrTaiwanDeathRate.open("POST", taiwanDeathRate, true);
  xhrTaiwanDeathRate.setRequestHeader("Content-type", "application/json");
  xhrTaiwanDeathRate.send(JSON.stringify({
    type: type,
    year: year
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
  return taiwanDeathRateData;
}
var initialData = sendPost("infant", 2017)

// google.charts.load('current', { packages: ['corechart', 'bar'] });
// google.charts.setOnLoadCallback(drawMultSeries(initialData));

// 畫出 barChart
function drawMultSeries(setData) {
  var data = new google.visualization.arrayToDataTable(setData);

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

function getCountry() {
  //  讀取radio的值
  var form = document.getElementById("form_name");
  for (var i = 0; i < form.language.length; i++) {
    if (form.language[i].checked) {
      var language = form.language[i].value;
      console.log(language);
    }
  }
  return renewDraw("infant",language);
}

// 把圖重新畫
function renewDraw(type, year) {
  var data = sendPost(type, year);
  console.log( data , "this is data");
  google.charts.load('current', { packages: ['corechart', 'bar'] });
  google.charts.setOnLoadCallback(drawMultSeries(data));
}
