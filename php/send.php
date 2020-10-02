<?php
$title = $_POST['title'];
$role = $_POST['role'];
$period = $_POST['period'];
$budget = $_POST['budget'];
$email = $_POST['email'];
$text = $_POST['text'];
$title = htmlspecialchars($title);
$role = htmlspecialchars($role);
$period = htmlspecialchars($period);
$budget = htmlspecialchars($budget);
$email = htmlspecialchars($email);
$text = htmlspecialchars($text);
$title = urldecode($title);
$role = urldecode($role);
$period = urldecode($period);
$budget = urldecode($budget);
$email = urldecode($email);
$text = urldecode($text);
$title = trim($title);
$role = trim($role);
$period = trim($period);
$budget = trim($budget);
$email = trim($email);
$text = trim($text);
echo $title;
echo "<br>";
echo $role;
echo "<br>";
echo $period;
echo "<br>";
echo $budget;
echo "<br>";
echo $email;
echo "<br>";
echo $text;
// if (mail("example@mail.ru", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email ,"From: example2@mail.ru \r\n"))
//  {     echo "сообщение успешно отправлено";
// } else {
//     echo "при отправке сообщения возникли ошибки";
}
?>