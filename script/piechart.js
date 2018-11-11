
// get piechart data
var apiUrlBabydeath="https://open-data-220705.appspot.com/api/death_cause/2017";
var xhrBabydeath = new XMLHttpRequest();
var googleDataBabydeath = [['reson', 'count']];
xhrBabydeath.open('GET',apiUrlBabydeath,true);
xhrBabydeath.send();
xhrBabydeath.onreadystatechange = function(){
  if(this.readyState === 4 && this.status === 200){
    var apiDataBabydeath = JSON.parse(this.responseText);
    // console.log(apiDataBabydeath);
    for(i=0;i< apiDataBabydeath.response.length ;i++){
        googleDataBabydeath[i+1]=[apiDataBabydeath.response[i][0],parseInt(apiDataBabydeath.response[i][1])];
    }
    //html label content
    var htmlLegandLabel = document.querySelectorAll('.chart__legand__item__label');
    // for(j=0;j<htmlLegandLabel.length;j++){
    for(j=0;j<9;j++){
      htmlLegandLabel[j].innerHTML = apiDataBabydeath.response[j][0];
    }
    //google piechart
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable(googleDataBabydeath);
      var options = {
        width: 379,
        height: 379,
        backgroundColor:{
          fill: '#fff7e2',
        },
        //調整整塊區域的位置
        chartArea:{
          width: 360,
          height: 360,
        },
        fontSize:'14',
        //說明圖標相關調整
        legend:{
          position: 'none',
        },
        pieSliceText:'none',
        // pieResidueSliceColor:'#fff7e2',
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
      }
      var chart = new google.visualization.PieChart(document.getElementById('piechart'));
      chart.draw(data, options);
    }
  }
};

// var googledata=[['reson', 'count'],
// ['先天性畸形、變形及染色體異常',     10],
// ['源於周產期的呼吸性疾患',      2],
// ['與妊娠長短及胎兒生長有關疾病',  2],
// ['事故傷害', 2],
// ['特發於周產期感染',    8],
// ['嬰兒猝死症候群',    7],
// ['胎兒及新生兒出血及血液疾患',    13],
// ['肺炎',    7],
// ['心臟疾病',    10],
// ['腦汁其他疾患',    7],];
// console.log(googledata);

//google pie chart
