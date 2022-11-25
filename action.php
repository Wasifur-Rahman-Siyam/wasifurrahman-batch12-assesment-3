
<?php
require_once "vendor/autoload.php";
use App\classes\LoadPage;

include 'pages/includes/header.php';


if (isset($_GET["page"])){
    if ('home' == $_GET["page"]) {
        include 'pages/home.php';
       }
    if ('todo' == $_GET["page"]) {
        include 'pages/todo.php';
       }   
}

include 'pages/includes/footer.php';