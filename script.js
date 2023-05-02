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


let currentList;

function initChart() {
    const ctx = document.getElementById('myChart');
  
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: 
        datasets: [{
          label: 'Payment Amount',
          data: 
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
    //console.log(storedList);
    return storedList
    //initChart();
}

async function mainEvent() {
    console.log("Start");
    currentList = await getData();
    const groupList = groupAgencies(currentList)
    console.log(groupList)
    const fundingPerGroup = totalFundingPerAgency(groupList)
    initChart();
    initChart2();
    console.log(totalFundingPerAgency(groupList))
}

function groupAgencies(currentList) {
  // hold list of groups or array of groups
  let groupList = [] // [[{},{}], [{},{}], [{},{}]]
  currentList.forEach(el => {
    // check if groupList is empty and push the very first element into a new group [el]
     if(groupList.length === 0) return  groupList.push([el])
 
     // looping through groupList 
     for (let j = 0; j < groupList.length; j++) {
       const group = groupList[j];
       // check if the first el's agency of a group is same as the current elements agency type and push into the group if it's same else just go to the next group and do same check
       if(group[0].agency === el.agency) return group.push(el)
     }
 
     // we're goig to create a new group with el, if it's agency doesn't match with any group already in the list
     return groupList.push([el])
  })

  return groupList // return group list to caller of function
}

function totalFundingPerAgency(groupList) {
  let fundingPerGroup = []
  groupList.forEach(agency => {
    fundingPerGroup.push(
      { 
        name: agency[0].agency, 
        totalFunding: sum(agency)
      })
  })
  return fundingPerGroup
}

function sum(array) {
  let result = 0
  array.forEach(item => {
    result += parseInt(item.amount)
  })
  return result
}

document.addEventListener("DOMContentLoaded", async () => mainEvent());
