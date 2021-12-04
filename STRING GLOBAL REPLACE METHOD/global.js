// when we write replace then it replaces the first word that matches it, but if we want to replace all words in document then we should use /g(i.e globally) and for case sensitivity use /i
function replaceWord(){
    let text=document.getElementById('para').innerHTML;
    document.getElementById('para').innerHTML=text.replace(/amrit/gi,'amrit pal');
}