        let header = document.getElementById("url").textContent;
        let name = document.getElementById("name").value;
        let year = document.getElementById("year").value;
        let concat = header;


        function extend(){
            if(name != '' && year != ''){
               concat = concat + "?name=" + name + "&year=" + year; 
            }
            else if(name == '' && year != ''){
               concat = concat + '?year=' + year;
            }
            else if(name != '' && year == ''){
               concat = concat + '?name=' + name;
            }
           
		document.querySelector("h3").innerHTML = concat;
        }