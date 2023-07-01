'use Strict'
//変数の定義
//モジュールの読み込み
const http = require('http');
const fs = require('fs');
const port = 8000;

//サーバーの作成
var server = http.createServer(serverSetting);



//プログラムの実行
server.listen(port);
console.log('サーバーが起動しました');



//function
//サーバー設定
function serverSetting(req, res){
    fs.readFile('./index.html', 'UTF-8', 
    (error, data)=>{
        var content = data.
            replace(/dummyTitle/g, 'タイトル').
            replace(/dummyContent/g, 'コンテンツ');

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(content);
        res.end();
        }
    );
}

