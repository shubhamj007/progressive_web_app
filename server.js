var env = process.env.NODE_ENV || 'development'
var express = require('express')
var app = require('express')();

app.use(express.static('./dist/pwademo'))

// logging
app.use(function(req, res, next) {
  console.log('path: ' + req.path)
  console.log('query:')
  console.log(req.query)
  console.log('body:')
  console.log(req.body)
  console.log('----------------------------')
  next()
})

var port = process.env.PORT || 3030

app.listen(port, function() {
  console.log('App listening on port ' + port + '!')
})