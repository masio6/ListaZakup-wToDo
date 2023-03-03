<?PHP


 if ($_SERVER['REQUEST_METHOD'] === 'GET')
  {
    $Path = "momo.xml";
   
   if (file_exists($Path))
    {
      $file = fopen($Path, 'r');
     
	 echo fread($file, filesize($Path));
     
	 fclose($file);
    }
    else {
      echo "error nie znaleziono pliku";
    }
  }



if ($_SERVER['REQUEST_METHOD'] === 'POST')
{
  $string = trim(file_get_contents('php://input'));

  if (strlen($string) > 0)
  {
    $Path = "momo.xml";

    $file = fopen($Path, 'w');
    
	fwrite($file, $string);
   
   fclose($file);
}}
 


?>