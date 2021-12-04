//const doesnt means it cant be changed but it means its refernce cant be chnaged
// if we declare array,object as const then their properties can be changed

const cars = ['audi','volvo','bmw','jaguar','rangerover'];

cars[0]='mercedes';  //changes element at index 0  
cars.push('maserati')  // push maserati at last index
cars.pop()  // removes element from last index
cars.unshift('rolls-royce')  // enters at initial index
cars.shift()  //removes element from initial index
document.getElementById("para").innerHTML=cars;
