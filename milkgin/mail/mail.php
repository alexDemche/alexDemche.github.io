<?php 

$recepient = "alexeydemche@gmail.com";
$sitename = "MaysonGerald";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$message = "Имя: $name \nПочта: $email \nТекст: $text";

$pagetitle = "Новая заявка  с сайта \"$sitename\"";

mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"UTF-8\"\n Form: $recepient");

?>