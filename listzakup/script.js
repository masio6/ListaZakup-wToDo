const tableBooks = document.getElementById('books');
const tbody1 = document.getElementById('tbi');

var trs = document.getElementById("tbi").getElementsByTagName("tr");
function pad()
{
	
	console.log(1234);
	
}


const kom1 = document.getElementById("komunikat1")
const kom2 = document.getElementById("komunikat2")
const kom3 = document.getElementById("komunikat3")


import  {Zakup} from  './zakup.js';
var todo=[];
var done=[];

function add()
{const input = document.querySelector("#likname");
	var nazwap = document.getElementById('nazwap');
	var ilosc = document.getElementById('ilość');

kom1.innerHTML="";
kom2.innerHTML="";
kom3.innerHTML="";

	 var p='true';
	
	 if ( nazwap.value.length<1) 
		 {
	kom1.innerHTML="Nie podano nazwy produktu!";
console.log("zle");	
return;	 
		 }
	 if (ilosc.value.length<1) 
		 {
	kom2.innerHTML="Nie podano ilości produktu!";			 
			 console.log("zle");
		
return;		
		}
	

	
	
	var produkt=new Zakup();
		produkt.ustaw(nazwap.value.toString(),ilosc.value.toString());
 todo.push(produkt);
 console.log(todo);
 nazwap.value="";
 ilosc.value="";
 kom3.innerHTML="Produkt dodano pomyślnie!";	
	
}
document.querySelector('button').addEventListener('click', add);
function sav()
{
	
	 var s = new XMLSerializer();
 
 var str = s.serializeToString(todo);
} 
	
	function load1()
	{



while(trs.length>0) trs[0].parentNode.removeChild(trs[0]);
	
	load();	
	}
	
	function load()

{
let xmlContent = '';
        
		
        fetch('momo.xml').then((response)=> {
            response.text().then((xml)=>{
                xmlContent = xml;

                let parser = new DOMParser();
                let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
                let books = xmlDOM.querySelectorAll('book');

                books.forEach(bookXmlNode => {

                    let row = document.createElement('tr');

                    //author
                    let td = document.createElement('td');
                    td.innerText = bookXmlNode.children[0].innerHTML;
                    row.appendChild(td);

                    //  title
                    td = document.createElement('td');
                    td.innerText = bookXmlNode.children[1].innerHTML;
                    row.appendChild(td);
                    
                    //price
                    td = document.createElement('td');
                    td.innerText =  bookXmlNode.children[2].innerHTML;
                    row.appendChild(td);


                    tbody1.appendChild(row);
              
                });
                
            });
        });    


}



load();
load1	();


function  sendData() {
		
		const xml = JSON.stringify(todo);
		fetch(`http://localhost/listzakup/serw.php$`, {
			method: 'POST',
			body: xml
		});
	}

	function downloadData() {
		fetch(`http://localhost/listzakup/serw.php$`)
			.then((response) => response.json())
			.then((json) => {
			
				json = JSON.parse(json);
				history=[];localhistory=[];
			
             
				// prints all lines on canvas
				json.map((element) => {
			
				history.push(element);
					
				
					malujfigure(element._data);

					// return canvass to preivious scale
					
				});
			});
	}