/*function filterList(list) {
    return list.filter((item) => {
      const lowerCaseName = item.name.toLowerCase();
      const lowerCaseQuery = query.toLowerCase();
      return lowerCaseName.includes(lowerCaseQuery);
    });

   function groupAgencies(list) {
    forEach((item) => {
        const agencyGroup = 
    })
   }

   function agencyFunding(list) {
    forEach ((item)) => {
        group the agencies based on item.agency;
        save the agency group categories as new attributes
        const totalFundingPerGency = find the total funding using item.amount for each agency;
        return totalFundingPerAgency
    }
   }

   function groupPaymentDescription(list) {
    forEach ((item) => {
        group the items based on the item.payment_description;
        save the new categories as new attributes
        const totalFundingPerNeed = find the total funding using item.amount for each payment_description group;
    })
   }

   function averageFundingPerAgency(list) {
    calculate the avaerage funding for the 5 agencies based on the totalFundingPerAgency;
   }

   function averageFundingPerNeed(list) {
    calculate the average funding for the payment descriptions based on totalFundingPerNeed;
   }
*/

function initChart() {
    const ctx = document.getElementById('myChart');
  
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Central Services', 'Public Works and Transportation', 'Police', 'Environment', 'Health'],
        datasets: [{
          label: 'Payment Amount',
          data: [12, 19, 3, 5, 2],
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
  
    return Chart
  }

  function initChart2() {
    const ctx2 = document.getElementById('myChart2');
  
    new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['Central Services', 'Public Works and Transportation', 'Police', 'Environment', 'Health'],
        datasets: [{
          label: 'Payment Amount',
          data: [12, 19, 3, 5, 2],
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
  
    return Chart
  }

async function getData() {
    const storedData = localStorage.getItem("storedData");
    let parsedData = JSON.parse(storedData);
    const results = await fetch('https://data.princegeorgescountymd.gov/resource/jh2p-ym6a.json');
    const storedList = await results.json();
    localStorage.setItem("storedData", JSON.stringify(storedList));
    parsedData = storedList;
    console.log(storedList);
    return storedList
    //initChart();
}

async function mainEvent() {
    console.log("Start");
    getData();
    initChart();
    initChart2();
}

document.addEventListener("DOMContentLoaded", async () => mainEvent());