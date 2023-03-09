//your JS code here. If required.
let displayTime="";
// console.log('1');
let time=document.getElementById('timer');
function timing(){
    // console.log('2');
    let times=new Date().toLocaleString();
    displayTime=times
    time.innerText=displayTime;
    time.style.alignItems="center";
}
setInterval(timing,1000);