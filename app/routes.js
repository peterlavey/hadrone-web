module.exports = (app)=>app.get('*', (req, res)=>	res.sendfile('./public/index.html'));
//module.exports = (app)=>app.get('*', (req, res)=>	res.sendfile('./public/example/example.html'));
