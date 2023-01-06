const http = require('http');

let app = http.createServer((req, res) => {
	console.log('收到请求');
	res.write('hello');
	res.end();
});

app.listen(7006);
console.log('listen on 7006');
