function func1(){
    alert('it changes the color to red')
    document.getElementById('para1').style.color='red';
    
}
function func2(){
   let a= window.prompt('type "yes" if you want to change size and weight of font')
   if(a==='yes'){
    document.getElementById('para2').style.fontSize='20px';
    document.getElementById('para2').style.fontWeight='bold'
    alert('changes done')
}else{
    alert('no changes made')
}
}    
function func3(){
document.getElementById('para3').style.fontFamily='Grey Qo'
document.getElementById('para3').style.fontSize='25px'
document.getElementById('para3').style.color='red';
}
function heading(){
    document.getElementById('head').innerHTML='<u><i>see the changes</i></u>'
}
//this prints the whole page 
function printPage(){
    window.print();
}