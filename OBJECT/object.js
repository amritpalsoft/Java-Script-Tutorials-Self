const obj={
    name:'Amrit',
    rollno:'20',
    branch:'Mechanical',
    engineer:'Software',
    company:'Amazon.com',
    position:'SDE'
}

obj.name='Amrit Pal'  //changing the property value of object
obj.company='Google'  //changing the property value of object



document.getElementById('para').innerHTML=`My Name is ${obj.name}, My Roll No is ${obj.rollno}. My branch is ${obj.branch}, but I am a ${obj.engineer} engineer and currently I works in ${obj.company} as a ${obj.position}.`