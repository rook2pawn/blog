var argv = require('optimist')
    .demand('p')
    .alias('p', 'port')
    .describe('p','port to start')
    .argv;
var http = require('http');
var express = require('express')
var db = require('./lib/db')
var post = require('./lib/posts')(db)
var user = require('./lib/user')(db)

var app = express()

// post management
app.post('/post/create',post.create)
app.post('/post/read',post.read)
app.post('/post/update',post.update)
app.post('/post/delete',post.delete)

// user management
app.post('/user/create',user.create)
app.post('/user/read',user.read)
app.post('/user/update',user.update)
app.post('/user/delete',user.delete)

app.post('/user/login',user.login)
app.post('/user/logout',user.logout)

app.get('/',post.read)
app.get('/:article', post.read)

var server = http.createServer(app)
server.listen(argv.p)
console.log('server listening on ' + argv.p)
