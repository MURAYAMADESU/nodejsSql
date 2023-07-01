'use Strict'
//変数の定義
//モジュールの読み込み
const http = require('http');
const fs = require('fs');
const port = 8000;

//サーバーの作成
var server = http.createServer((request, response) => {
    response.end('Hello World');
});

server.listen(port);