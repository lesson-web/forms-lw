<?
$input_result=json_decode($_REQUEST['input_result']);

$message="<html><head><title>"+$_REQUEST['title']+"</title></head><body>";
foreach ($input_result as $key => $input) {
  $message.=$input->title+' : '+$input->value;
}
$message.="</body>
    </html>";

$to  = $_REQUEST['emails'];
$subject = $_REQUEST['title'];
$headers  = "Content-type: text/html; charset=UTF-8 \r\n";
$headers .= "From: "+$_REQUEST['from']+"\r\n";
if(mail($to, $subject, $message, $headers)){
  echo 'ok';
}else{
  echo "no";
}



?>
