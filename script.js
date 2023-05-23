  document.getElementById('button').addEventListener('click',()=>{
    console.log('hii');
            let header = document.getElementById("url").textContent;
            let name = document.getElementById("name").value;
            let year = document.getElementById("year").value;
            let concat = header;
           
        concat=operation(name,year,header,concat);
		document.querySelector("#url").innerText = concat;
    console.log(document.getElementById('url').innerText);
  })
        
       function operation(name,year,header,concat){
	        if(name != '' && year != ''){
               concat = concat + "?name=" + name + "&year=" + year; 
            }
            else if(name == '' && year != ''){
               concat = concat + '?year=' + year;
            }
            else if(name != '' && year == ''){
               concat = concat + '?name=' + name;
            }
           return concat;
       }
