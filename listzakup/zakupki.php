<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="zakupkistyl.css">
    <title>Lista Zakupów</title>
</head>
<body>
 <div id="nagl">
 <h1>Lista zakupów<h1>
</div>   
  <div class="mytabs">
    <input type="radio" id="tabfree" name="mytabs" checked="checked">
    <label for="tabfree">DO ZROBIENIA</label>
    <div class="tab">
      <h2>Zakupy do Kupienia</h2>
     

        <table id='books' cellpadding='10px' style="text-align:left;" Border>
            <thead >
                <tr>
			<th>id</th>
                    <th>Produkt</th>
                    <th>ilość</th>
<th>Zrobiono?</th>
		
             
                </tr>                
            </thead>
            <tbody id="tbi">

            </tbody>
        </table>	 
	 
</div>


    <input type="radio" id="tabsilver" name="mytabs">
    <label for="tabsilver">ZROBIONO</label>
    <div class="tab">
      <h2>Zakupy już kupione</h2>
 <table id='tabdone' cellpadding='10px' style="text-align:left;" Border>
            <thead >
                <tr>
			<th>id</th>
                    <th>Produkt</th>
                    <th>ilość</th>
<th>Przywróć</th>
		
             
                </tr>                
            </thead>
            <tbody id="tbd">

            </tbody>
        </table>	       
	  </div>
<input type="radio" id="add" name="mytabs">
    <label for="add">DODAJ DO LISTY</label>
    <div class="tab">
      <h2>DODAJ PRODUKT:</h2>
 <p>Podaj nazwę produktu:
 <br>
 <input list="products" type="text" id="nazwap" name="lname"> 
 <datalist id="products">
 <div id="komunikat1" style="color:red " value="hoj">

 </div>
 <br>
 <p>Podaj ilość produktów: 
 <br>

 <input type="text" id="ilość" name="lname1"> 
 <br>
<div id="komunikat2" style="color:red " value="hoj67">
</div>
 <br>
<button >Dodaj do Listy</button>
<br>
   <div id="komunikat3" style="color:green " >
</div>
     <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
   <script  type="module"  src="script4.js"></script>   
	 </div>


  </div>

</body>
</html>

