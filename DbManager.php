<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>test8</title>
  </head>
  <body>
    <?php
      function getDb() {
        $dsn = 'mysql:dbname=selfphp: host=127.0.0.1; charset=utf8';
        $url = 'selfurl';
        $passwd = 'selfpass';

        $db = new PDO($dsn, $url, $passwd);
        return $db;
      }
    ?>
 </body>
</html>
