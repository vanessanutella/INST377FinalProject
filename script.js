function initChart(chart) {
    const ctx = document.querySelector('#myChart');
  
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
    return new Chart(
      chart,
      config
    )
  }

async function getData() {
    //const storedData = localStorage.getItem("storedData");
    //let parsedData = JSON.parse(storedData);
    //const results = await fetch('https://data.princegeorgescountymd.gov/resource/jh2p-ym6a.json');
    //const storedList = await results.json();
    //localStorage.setItem("storedData", JSON.stringify(storedList));
    //parsedData = storedList;
    //console.log(storedList);
    initChart(ctx);
}

/*
function initChart(chart) {
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const myChart = new Chart(
    chart,
    config
  )
} */