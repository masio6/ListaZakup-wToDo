const tableBooks = document.getElementById('books');
const tbody1 = document.getElementById('tbi');
const lista=document.getElementById('products');
const tableBooksdone = document.getElementById('tabdone');
const tbody1done = document.getElementById('tbd');

var todo=[];
var done=[];
var trs = document.getElementById("tbi").getElementsByTagName("tr");
var dowywal=0;
setInterval(loaddata, 2000);
setInterval(wywal,20000);

function wywal()
{
	
	
	dowywal++;
	
}

const kom1 = document.getElementById("komunikat1")
const kom2 = document.getElementById("komunikat2")
const kom3 = document.getElementById("komunikat3")


import  {Zakup} from  './zakup.js';
var todo=[];
var done=[];


function del(id)
{
	

	
}
 tableBooks.addEventListener("click", onDeleteRow);
 tableBooksdone.addEventListener("click", onDeleteRow1);
function add()
{const input = document.querySelector("#likname");
	var nazwap = document.getElementById('nazwap');

var ilosc = document.getElementById('ilość');
	var tt=parseInt(ilosc.value);


kom1.innerHTML="";
kom2.innerHTML="";
kom3.innerHTML="";

	 var p='true';
	
	 if ( nazwap.value.length<1) 
		 {
	kom1.innerHTML="Nie podano nazwy produktu!";

return;	 
		 }
	 if (ilosc.value.length<1) 
		 {
	kom2.innerHTML="Nie podano ilości produktu!";			 
			
		
return;		
		}
		if(tt==NaN)
		{
			
	kom2.innerHTML="Nie podano liczby";				
			
			
		}
	

	
	
	var produkt=new Zakup();
		var id=Math.floor(Math.random() * 1000);
		produkt.ustaw(id,nazwap.value.toString(),ilosc.value.toString(),"false");
 todo.push(produkt);

 nazwap.value="";
 ilosc.value="";
 kom3.innerHTML="Produkt dodano pomyślnie!";	
	savedata();
}


function znajdzindeks(id){
	
	var i;

	for( i=0;i<todo.length;i++)
	{
		
		if(todo[i]._data['id']==id)
		{return i;
	
	}
		
	}
	
	
}
function znajdzindeks2(id){
	
	
	for(var i=0;i<todo.length;i++)
	{
		
		if(todo[i]._data['id']=id)
			return i;
		
	}
	
	
}

document.querySelector('button').addEventListener('click', add);
 function onDeleteRow(e) {
        if (!e.target.classList.contains("deleteBtn")) {
          return;
        }

        const btn = e.target;
        
		var br=  btn.closest("tr");
	
		var id=br.children[0].innerHTML;
		
		var indeks=znajdzindeks(id);

		todo[indeks].zmien();
		savedata();

		
      }
	  
	  function onDeleteRow1(e) {
        if (!e.target.classList.contains("deleteBtn")) {
          return;
        }

        const btn = e.target;
        
		var br=  btn.closest("tr");
		var id=br.children[0].innerHTML;

		var indeks=znajdzindeks(id);

		todo[indeks].zmien();
	
		savedata();
	
      }
	  
	  
	  
function sav()
{
	
	
	
	 var s = new XMLSerializer();
 
 var str = s.serializeToString(todo);
} 
	function countRows(){
        var oTable = document.getElementById('books');
          return oTable.rows.length;
      }

	function ConvertToXML(lista)
	{
		var str="<?xml version='1.0'?><catalog>";
		for(var i=0;i<lista.length;i++)
		{
			
			var ob=todo[i];
			str+="<book><id>"+ob._data['id']+"</id><nazwa>"+ob._data['nazwa']+"</nazwa><ilość>"+ ob._data['ilość']+"</ilość><zrobione>"+ ob._data['zrobione']+"</zrobione></book>";
			
			
			
			
			
			
		}
		
		
		str+="</catalog>";
		
		
		return str;
		
	}
	

	var tak=0;
	function savedata(){
      var str=ConvertToXML(todo);
		
		

		
var xhr=new XMLHttpRequest();
		//xhr.onreadystatechange=OnTaskLoaded;
		xhr.open("POST",'http://localhost/listzakup/serwerek.php',"true");
		xhr.send(str);
		
		
		
		
		
		
		
		
	}
	function loaddata(){
		lista.innerHTML='';
		todo=[];
	         tbody1.innerHTML="";
			  tbody1done.innerHTML="";
		var xhr=new XMLHttpRequest();
		//xhr.onreadystatechange=OnTaskLoaded;
		xhr.open("GET",'http://localhost/listzakup/serwerek.php',"true");
		 xhr.onload = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
  //      console.log(typeof xhr.response); // >> string
       
		
		
		
             var   xmlContent = xhr.response;

                let parser = new DOMParser();
                let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
                let books = xmlDOM.querySelectorAll('book');

                books.forEach(bookXmlNode => {

var t=bookXmlNode.children[3].innerHTML;
if(bookXmlNode.children[3].innerHTML=="false"){
        tbody1.innerHTML +=`<tr class="rows">
               <td>`+bookXmlNode.children[0].innerHTML + `</td>
                <td>`+bookXmlNode.children[1].innerHTML + `</td>
                <td>`+ bookXmlNode.children[2].innerHTML +`</td>
 
<td><button class="deleteBtn">Zrobiono</button></td>`+
 //<td><button id="deleteBtn" onclick="del(`+ bookXmlNode.children[0].innerHTML +`)">Delete</button></td>
			`</tr>`;
			lista.innerHTML+='<option value='+bookXmlNode.children[1].innerHTML+">";
			var z=new Zakup();
			z.ustaw(bookXmlNode.children[0].innerHTML,bookXmlNode.children[1].innerHTML,bookXmlNode.children[2].innerHTML,"false")
			todo.push(z);
			
			
}
else{
	
	 tbody1done.innerHTML +=`<tr class="rows">
               <td>`+bookXmlNode.children[0].innerHTML + `</td>
                <td>`+bookXmlNode.children[1].innerHTML + `</td>
                <td>`+ bookXmlNode.children[2].innerHTML +`</td>
 
<td><button class="deleteBtn">Do zrobienia</button></td>`+
 //<td><button id="deleteBtn" onclick="del(`+ bookXmlNode.children[0].innerHTML +`)">Delete</button></td>
			`</tr>`;
			lista.innerHTML+='<option value='+bookXmlNode.children[1].innerHTML+">";
			var z=new Zakup();
			z.ustaw(bookXmlNode.children[0].innerHTML,bookXmlNode.children[1].innerHTML,bookXmlNode.children[2].innerHTML,"true")
			if(dowywal>0){
			
			tak++;
			
			}else{
			todo.push(z);
			
			
			}
	
	
	
	
	
}



                    //author
                 

                
                    
                    //price
                  


              
                });
   
if(tak>0){
tak=0;
dowywal=0;
savedata();
}

		
       // console.log(typeof xhr.responseText); // >> string

        }
    }
		xhr.send();
	//	console.log( xhr.responseText);
		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
