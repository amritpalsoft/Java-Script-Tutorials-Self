function showTime(){
let month=document.getElementById('month');

let currentMonth=(new Date().getUTCMonth())+1

switch (currentMonth) {
    case 1:
        month.innerHTML="January"
        break;
    case 2:
        month.innerHTML="Febuary"
        break;
    case 3:
        month.innerHTML="March"
        break;
    case 4:
        month.innerHTML="April"
        break;
    case 5:
        month.innerHTML="May"
        break;
    case 6:
        month.innerHTML="June"
        break;
    case 7:
        month.innerHTML="July"
        break;
    case 8:
        month.innerHTML="August"
        break;
    case 9:
        month.innerHTML="September"
        break;
    case 10:
        month.innerHTML="October"
        break;
    case 11:
        month.innerHTML="November"
        break;
    case 12:
        month.innerHTML="December"
        break;

    default:
        break;
}

}