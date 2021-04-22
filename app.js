const WebSocket = require('ws')

const wss = new WebSocket.Server({
  port: 9998
})

const listen = () => {
  console.log(`开启WebSocket监听,端口: 9998`)
  wss.on('connection', client => {
    console.log('有客户端连接成功了...')

    client.on('message', async msg => {
      console.log('客户端发送数据给服务端了：' + msg)
      let payload = JSON.parse(msg)
      wss.clients.forEach(client => {
        client.send(msg)
      })
    })
  })
}
listen()