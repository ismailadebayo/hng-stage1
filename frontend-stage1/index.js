const date = new Date();
document.getElementById('footer-year').textContent = date.getFullYear();

let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds()

document.getElementById('utc-time').textContent = `${hours} hr : ${minutes} min : ${seconds} secs `

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById('utc-day').textContent = days[date.getDay()]

let image1 = document.getElementById('javascript')
let image2 = document.getElementById('react')
let image3 = document.getElementById('next')
let image4= document.getElementById('js')

console.log('Natural width:' +image1.naturalWidth, "Natural height:" + image1.naturalHeight)


