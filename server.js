const express = require('express');
const http = require('http')
const cors = require("cors")

const app = express();
const server = http.createServer(app);

app.use(cors())

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// 服务器socket链接
io.on("connection", (socket) => {
  socket.emit('me', socket.id)

  // 断开通信
  socket.on("disconnect", () => {
    socket.broadcast.emit("callEnded")
  })
  socket.on('callUser', (data) => {
    console.log('从客户端callUser来的数据', data);
    // 向(to)这个id发送(emit)消息，再会客户端监听calluser
    io.to(data.userToCall).emit('callUser', {
      signal: data.signalData,
      form: data.form,
      name: data.name
    })

  })
})

server.listen(5000, () => {
  console.log('服务器正在5000的端口号运行');
})