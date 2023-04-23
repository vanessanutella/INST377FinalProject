async function getData() {
    const response = await fetch('https://data.princegeorgescountymd.gov/resource/jh2p-ym6a.json')
    const data = await response.json()
}

let data = JSON.parse(this.response)