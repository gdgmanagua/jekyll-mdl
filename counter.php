<?php
define('DOCUMENT_ROOT', $_SERVER['DOCUMENT_ROOT']);

/**********************************************************************
 * 設定
 **********************************************************************/
define('COUNT_FILE', DOCUMENT_ROOT . '/ajax-counter/dat/count.dat'); // アクセス数
define('LOG_FILE', DOCUMENT_ROOT . '/ajax-counter/dat/log.dat'); // ログ

/**********************************************************************
 * カウント処理を行い，アクセス数を json 形式で出力する関数．
 **********************************************************************/
function counter(){
  $count_fp = fopen(COUNT_FILE, 'r+'); // アクセス数ファイルをopen
  if (flock($count_fp, LOCK_EX)){ // アクセス数ファイルをLock
    $countData = fgets($count_fp); // アクセス数データを$countに読み込む
    $count = explode(',', $countData); // $countDataを,で区切って [0]日付 [1]累計 [2]今日 [3]昨日
    $count[1]+=1; // 累計アクセス数を1増やす

    // タイムゾーンを日本標準時に（WordPress対策）
    date_default_timezone_set('Asia/Tokyo');
    $now=date('Ymd'); //今日の日付を8桁で取得
    date_default_timezone_set('UTC');

    if($now === $count[0]) { // 日付が一致したら，今日アクセス数を1増やす
      $count[2] += 1;
    }
    else { // 日付が変わった場合
      writeLog($count[0], $count[2]); // ログに書き込む
      $count[3] = $count[2]; // 今日を昨日に
      $count[2] = 1; // 今日をリセット
    }
    ftruncate($count_fp, 0); // 中身をリセット
    rewind($count_fp); // アクセス数ファイルのファイルポインタを先頭へ
    fwrite($count_fp, $now . ',' . $count[1] . ',' . $count[2] . ',' . $count[3]); // アクセス数ファイルに新たな値を書き込む
    flock($count_fp, LOCK_UN); // アクセス数ファイルをunLock
  }
  fclose($count_fp); // アクセス数ファイルをclose

	// アクセス数を json 形式にして出力
	$counts = array('total' => $count[1], 'today' => $count[2], 'yesterday' => $count[3]);
	echo json_encode($counts);
}

/**********************************************************************
 * Ajax による呼び出しなら true を返す関数．
 **********************************************************************/
function isAjax() {
  if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest'){
    return true;
  }
  return false;
}

/**********************************************************************
 * ログにアクセス数を書き込む関数
 **********************************************************************/
function writeLog($day, $count){
  $fp = fopen(LOG_FILE, 'a+'); // ログファイルをopen
  if (flock($fp, LOCK_EX)){ // ログファイルをLock
    fwrite($fp, "\n"); // ログファイルの最後尾に書き込む
    fwrite($fp, $day . ',' . $count); // ログファイルの最後尾に書き込む
    flock($fp, LOCK_UN); // ログファイルをunLock
  }
  fclose($fp); // ログファイルをclose
}

/**********************************************************************
 * counter.php が呼ばれたら以下が実行される．
 **********************************************************************/

// Ajax 以外での呼び出し時はエラーを出力．
if(!isAjax()) {
  echo 'Error: Ajax 以外での呼び出しは禁止されています．';
  exit;
}

// カウント処理を実行し，json を出力．
counter();
