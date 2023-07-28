const chartData = {
    labels: ['Column 1', 'Column 2', 'Column 3', 'Column 4'],
    datasets: [{
      label: 'Data',
      data: [0, 0, 0, 0],
      backgroundColor: ['rgb(75, 192, 192)', 'rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
      borderWidth: 1
    }]
  };
  
  const chartConfig = {
    type: 'bar',
    data: chartData,
    options: {
      responsive: true,
      animation: false,
      scales: {
        y: {
          min: 0,
          max: 100
        }
      }
    }
  };
  
  const updateInterval = 100; // milliseconds
  let values = [0, 0, 0, 0];
  let increasing = true;
  const chartCanvas = document.getElementById('myChart');
  const chartContext = chartCanvas.getContext('2d');
  const myChart = new Chart(chartContext, chartConfig);
  
  function updateChart() {
    if (increasing) {
      values = values.map(val => (val >= 100 ? 100 : val + 1));
      if (values.every(val => val === 100)) {
        increasing = false;
      }
    } else {
      values = values.map(val => (val <= 0 ? 0 : val - 1));
      if (values.every(val => val === 0)) {
        increasing = true;
      }
    }
  
    chartData.datasets[0].data = values;
    myChart.update();
  }
  
  setInterval(updateChart, updateInterval);
  