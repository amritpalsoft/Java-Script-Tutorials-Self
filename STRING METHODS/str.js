let str='amrit pal'
str='my name is amrit pal';
let a=str.length;
//slice method takes both positive and negative parameter 
//in positive parameter substring is from start of string
//in negative parameter substring starts from end of the string
let b=str.slice(3,7) //extracts a part of string 
let c=str.slice(-20,-6);
//substring is similar to slice except it does not take negative parameters
let d=str.substring(7,11)

//substr is similar to slice, difference is that second parameter tells about length of substring
let e=str.substr(7,6);

let f=str.replace('pal','singh')




document.getElementById('para').innerHTML=`Length: ${a} <br/>Slice with positive parameter: ${b}<br/>Slice with negative: ${c}<br/>Substring: ${d}<br/>Substr: ${e}<br/>Replace:${f}`