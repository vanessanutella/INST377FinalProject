async function getData() {
    const response = await fetch('https://data.princegeorgescountymd.gov/Finance-and-Budget/Spending-Information-for-FY-2022/jh2p-ym6a')
    const data = await response.json()
}

let data = JSON.parse(this.response)