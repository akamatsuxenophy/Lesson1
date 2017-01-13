<?php
spl_autload_register(function($fqcn) {
  //クラスファイルの保存先 (基点)
  $prefix = 'lib/';

  //完全修飾名 ($fqcn)の最後の「\」位置を検出
  $nsPos = strripos($fqcn, '\\');
  //「\\」がない場合は、そのままインポート
  if ($nsPos === false) {
    $path = $prefix.$fqcn.'.class.php';
  //名前空間を利用している場合には、パスに変換した上でインポート
} else {
  $ns = substr($fqcn, 0, $nsPos);
  $scn = substr($fqcn, $nsPos + 1);
  $path = $prefix.str_replace('\\', '/', $ns).'/'.$scn.'.class.php';
}
  require_once $path;
});
?>
