const http = require('http');

let app = http.createServer((req, res) => {
	res.write('hello');
	res.end();
});

app.listen(7006);
console.log('listen on 7006');
