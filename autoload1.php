<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>typhp10-2</title>
  </head>
  <body>
  <?php
    require_once 'autoloader.php';

    $p = new Person('太郎', '山田');
    $p->show();
   ?>
  </body>
</html>
