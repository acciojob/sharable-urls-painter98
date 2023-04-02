        let header = document.getElementById("url").textContent;
        let name = document.getElementById("name").value;
        let year = document.getElementById("year").value;
        let concat = header;

 
        concat = operation(name,year,header,concat);
		document.querySelector("#url").innerHTML = concat;
        }
		//document.getElementById("url").innerHTML=extend();
       // console.log(concat);
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