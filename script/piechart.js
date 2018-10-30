//get piechart data
// var apiUrlBabydeath="http://c5520adf.ngrok.io//api/death_cause/2017";
// var xhrBabydeath = new XMLHttpRequest();
// var apiDataBabydeath = null;
// var googleDataBabydeath = [['reson', 'count']];
// xhrBabydeath.open('GET',apiUrlBabydeath,true);
// xhrBabydeath.send();
// xhrBabydeath.onreadystatechange = function(){
//   if(this.readyState === 4 && this.status === 200){
//     var apiDataBabydeath = JSON.parse(this.responseText);
//     console.log(apiDataBabydeath.response);
//     console.log(apiDataBabydeath.response.length);
//     //整理成google 格式
//     for(i=0;i<=apiDataBabydeath.response.length;i++){
//       googleDataBabydeath[i+1][0]=apiDataBabydeath.response[i][0];
//       googleDataBabydeath[i+1][1]=Number(apiDataBabydeath.response[i][1]);
//     }
//     console.log(googleDataBabydeath);
//   }
// };

var googledata=[['reson', 'count'],
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
['其他',    11],];



//google pie chart
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  // var data = google.visualization.arrayToDataTable([
  //   ['reson', 'count'],
  //   ['先天性畸形、變形及染色體異常',     10],
  //   ['源於周產期的呼吸性疾患',      2],
  //   ['與妊娠長短及胎兒生長有關疾病',  2],
  //   ['事故傷害', 2],
  //   ['特發於周產期感染',    8],
  //   ['嬰兒猝死症候群',    7],
  //   ['胎兒及新生兒出血及血液疾患',    13],
  //   ['肺炎',    7],
  //   ['心臟疾病',    10],
  //   ['腦汁其他疾患',    7],
  //   ['其他',    11],
  // ]);
  var data = google.visualization.arrayToDataTable(googledata);

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
      textStyle: {
        color: '#4a4a4a',
        fontSize: 12,
      },
      showColorCode: true,
    }
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}
