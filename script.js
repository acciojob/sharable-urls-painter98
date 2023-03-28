// your code here
let header = document.getElementsById("url").value;
let name = document.getElementsById("name").value;
let year = document.getElementsById("year").value;

if(name != '' && year != ''){
	header.textContent = header + '/?name=' + name + '&year=' + year;  
}
else if(name == '' && year != ''){
	header.textContent = header + '/?year=' + year;
}
else{
	header.textContent = header + '/?name=' + name;
}