<?php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
require_once __DIR__.'/vendor/autoload.php';
require_once __DIR__.'/bootstrap/App.php';
use Bootstrap\App;
class_alias('\RedBeanPHP\R','\R');

R::setup('mysql:host=localhost;dbname=test',
'root', 'mpmegmrx');

//$app = new App();
//$app->run();
$app = new App();
 
$app->run();