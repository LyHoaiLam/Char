const chartData = {
    labels: [],
    datasets: [{
      label: 'Data',
      data: [],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };
  
  const chartConfig = {
    type: 'line',
    data: chartData,
    options: {
      responsive: true,
      animation: false,
      scales: {
        x: {
          display: false
        },
        y: {
          min: 0,
          max: 100
        }
      }
    }
  };
  
  const updateInterval = 100; // milliseconds
  let value = 0;
  let increasing = true;
  const chartCanvas = document.getElementById('myChart');
  const chartContext = chartCanvas.getContext('2d');
  const myChart = new Chart(chartContext, chartConfig);
  
  function updateChart() {
    if (increasing) {
      value++;
      if (value >= 100) {
        value = 100;
        increasing = false;
      }
    } else {
      value--;
      if (value <= 0) {
        value = 0;
        increasing = true;
      }
    }
  
    chartData.labels.push('');
    chartData.datasets[0].data.push(value);
  
    if (chartData.labels.length > 100) {
      chartData.labels.shift();
      chartData.datasets[0].data.shift();
    }
  
    myChart.update();
  }
  
  setInterval(updateChart, updateInterval);
  