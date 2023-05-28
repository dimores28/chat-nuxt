const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

io.on('connection', socket => {
  console.log('IO Connected');

  socket.on('emit_method', data => {
    setTimeout(()=> {
      socket.emit('NewMessage', {
        text: data.text + ' server',
      });
    }, 500);
  });

  socket.emit('NewMessage', {
    text: 'WHAT',
  });
})

module.exports = {
  app,
  server
}
