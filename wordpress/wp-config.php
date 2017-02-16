<?php
/**
 * WordPress の基本設定
 *
 * このファイルは、インストール時に wp-config.php 作成ウィザードが利用します。
 * ウィザードを介さずにこのファイルを "wp-config.php" という名前でコピーして
 * 直接編集して値を入力してもかまいません。
 *
 * このファイルは、以下の設定を含みます。
 *
 * * MySQL 設定
 * * 秘密鍵
 * * データベーステーブル接頭辞
 * * ABSPATH
 *
 * @link http://wpdocs.sourceforge.jp/wp-config.php_%E3%81%AE%E7%B7%A8%E9%9B%86
 *
 * @package WordPress
 */

// 注意:
// Windows の "メモ帳" でこのファイルを編集しないでください !
// 問題なく使えるテキストエディタ
// (http://wpdocs.sourceforge.jp/Codex:%E8%AB%87%E8%A9%B1%E5%AE%A4 参照)
// を使用し、必ず UTF-8 の BOM なし (UTF-8N) で保存してください。

// ** MySQL 設定 - この情報はホスティング先から入手してください。 ** //
/** WordPress のためのデータベース名 */
define('DB_NAME', 'wpdb');

/** MySQL データベースのユーザー名 */
define('DB_USER', 'wpadmin');

/** MySQL データベースのパスワード */
define('DB_PASSWORD', 'Sei@25800915');

/** MySQL のホスト名 */
define('DB_HOST', 'localhost');

/** データベースのテーブルを作成する際のデータベースの文字セット */
define('DB_CHARSET', 'utf8mb4');

/** データベースの照合順序 (ほとんどの場合変更する必要はありません) */
define('DB_COLLATE', '');

/**#@+
 * 認証用ユニークキー
 *
 * それぞれを異なるユニーク (一意) な文字列に変更してください。
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org の秘密鍵サービス} で自動生成することもできます。
 * 後でいつでも変更して、既存のすべての cookie を無効にできます。これにより、すべてのユーザーを強制的に再ログインさせることになります。
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'H.GwCUQ6OuNJH?=cLxTB/of!}q@d$d]%GB%K%!go6}@LZ{1Y?(zNkeSOV);Ri/V/');
define('SECURE_AUTH_KEY',  'y4H (qV0^{fY2I3|!#f>~1LdMKiA:2!)Fm;t/^zK3]Pu>?;m@]Z`}-P&;IV(TU/^');
define('LOGGED_IN_KEY',    'T*|A_!?zf0N<;.fkNfs[_YyBA5eDsWg#; G*_qh^7Z 6UlH*ICY;sks6@#i+zTo`');
define('NONCE_KEY',        'BtDYf(P(RrrF rv mRns?B_Q9]n.;MgI(T_7xPlV$?R{HvkJ7?tLv@6rGgp-v&Jj');
define('AUTH_SALT',        'G:~}qB;@Lgte1k/yc@,hG8HGq?RD9,t fR,]<*0ecUt[m; 80GJ!%[_,l__6slfd');
define('SECURE_AUTH_SALT', 'Lq5-;itL]FCj^q {L54m~R-?Lh}J5(Gkp^hbb$l[=T[%Ht2StscM*?m<*{lA2TYh');
define('LOGGED_IN_SALT',   'SvH~4r9z,8#LYE}UkpsiLZ.,m:/v9_YKkOV`X@l)?hp*g)O!0(,6l{[d3uZRKX@6');
define('NONCE_SALT',       'Fs)4{G>4RDA17{`V+P[O|;{/jlH005_& &e}`m07jV_g]F-N2VaICkl/ha(fOTE#');

/**#@-*/

/**
 * WordPress データベーステーブルの接頭辞
 *
 * それぞれにユニーク (一意) な接頭辞を与えることで一つのデータベースに複数の WordPress を
 * インストールすることができます。半角英数字と下線のみを使用してください。
 */
$table_prefix  = 'wp_';

/**
 * 開発者へ: WordPress デバッグモード
 *
 * この値を true にすると、開発中に注意 (notice) を表示します。
 * テーマおよびプラグインの開発者には、その開発環境においてこの WP_DEBUG を使用することを強く推奨します。
 *
 * その他のデバッグに利用できる定数については Codex をご覧ください。
 *
 * @link http://wpdocs.osdn.jp/WordPress%E3%81%A7%E3%81%AE%E3%83%87%E3%83%90%E3%83%83%E3%82%B0
 */
define('WP_DEBUG', false);

/* 編集が必要なのはここまでです ! WordPress でブログをお楽しみください。 */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
