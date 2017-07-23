<?php
$input_result=json_decode($_REQUEST['input_result']);

$message="<html><head><title>";;
$message.=$_REQUEST['title'];
$message.="</title></head><body>";
foreach ($input_result as $key => $input) {
  $message.=$input->title;
  $message.=': ';
  $message.=$input->value;
  $message.='<br>';
}
$message.="</body>
    </html>";

$to       = $_REQUEST['emails'];
$subject  = $_REQUEST['title'];
$headers  = "Content-type: text/html; charset=UTF-8 \r\n";
$headers .= "From: ";
$headers .= $_REQUEST['from'];
$headers .= "\r\n";
if(mail($to, $subject, $message, $headers)){
  echo 'ok';
}else{
  echo "no";
}


?>
