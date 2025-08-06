
const http = require('http');
const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end('Welcome to our homepage');
    }
    if(req.url === '/about'){
        res.end('Out short story');
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We cant see, to find the page you are looking for</p>
        <a href="/">Back home</a>
        `);
})

server.listen(5000);