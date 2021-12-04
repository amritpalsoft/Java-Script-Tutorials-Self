let a,time,date;
function showTime(){
    setInterval(() => {
       a=new Date();
       date=a.toLocaleDateString();
       time=a.getHours()+':'+a.getMinutes()+':'+a.getSeconds();
       document.getElementById('tim').innerHTML=time
       document.getElementById('dat').innerHTML=date
       document.getElementById('tim').style.color='blue'
    }, 1000);
}