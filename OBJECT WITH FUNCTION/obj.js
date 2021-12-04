let obj={
    name:'amrit',
    branch:'me',
    last_name:'pal',
    city:'faizabad',
    fullname:function(){
       return this.name+' '+this.last_name;
    }
}
document.getElementById('para').innerHTML=`the name is ${obj.fullname()}`;