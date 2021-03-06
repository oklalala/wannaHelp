// get barchart taiwan data
var taiwanDeathRate = "https://open-data-220705.appspot.com/api/death_rate";
var xhrTaiwanDeathRate = new XMLHttpRequest();
var taiwanDeathRateData = [['county', '死亡率']];

//  讀取radio的值
function getTaiwan() {
  var form = document.getElementById("taiwan__year");
  for (var i = 0; i < form.year.length; i++) {
    if (form.year[i].checked) {
      var year = form.year[i].value;
      // console.log(year);
    }
  }
  return renewTaiwanDraw("infant", year);
}

// 把圖重新畫
function renewTaiwanDraw(type, year) {
  var data = sendPost(type, year);
  // console.log( data , "this is data");
  google.charts.load('current', { packages: ['corechart', 'bar'] });
  google.charts.setOnLoadCallback(drawTaiwanMultSeries(data));
  // drawMultSeries(data);
}

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
      // console.log(rowDeathRate, 111111111111);
      var count = 0;
      for (key in rowDeathRate.data) {
        taiwanDeathRateData[count++ + 1] = [key, rowDeathRate.data[key]];
      }
      taiwanDeathRateData.pop();
      // console.log(taiwanDeathRateData, 99999999999999);
    }
  }
  return taiwanDeathRateData;
}
// sendPost("infant", 2017)
// google.charts.load('current', { packages: ['corechart', 'bar'] });
// google.charts.setOnLoadCallback(drawMultSeries(initialData));

// 畫出 barChart
function drawTaiwanMultSeries(setData) {
  // console.log(setData, "hehehehehe");
  var data = new google.visualization.arrayToDataTable(setData);
  // console.log( data, "taiwan comeon!");
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




// renewTaiwanDraw("infant",2017);
