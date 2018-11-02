google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawMultSeries);

function drawMultSeries() {
  var data = new google.visualization.DataTable();
  data.addColumn('timeofday', 'Time of Day');
  data.addColumn('number', 'Motivation Level');

  data.addRows([
    [{ v: [2, 0, 0], f: '台南' }, 1],
    [{ v: [9, 0, 0], f: '高雄' }, 2],
    [{ v: [10, 0, 0], f: '台中' }, 3],
    [{ v: [11, 0, 0], f: '台北' }, 4],
    [{ v: [12, 0, 0], f: '基隆' }, 5],
    [{ v: [13, 0, 0], f: '新北' }, 6],
    [{ v: [14, 0, 0], f: '苗栗' }, 7],
    [{ v: [15, 0, 0], f: '南投' }, 8],
    [{ v: [16, 0, 0], f: '嘉義' }, 9],
    [{ v: [17, 0, 0], f: '花蓮' }, 10],
  ]);

  var options = {
    hAxis: {
      // title: 'Time of Day',
      format: 'h:mm a',
      viewWindow: {
        min: [7, 30, 0],
        max: [17, 30, 0]
      }
    },
    vAxis: {
      // title: 'Rating (scale of 1-10)'
    },
    backgroundColor: '#fff7e2',

  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById('chart__taiwan'));

  chart.draw(data, options);
}
