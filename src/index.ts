import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port : 8080 })

//on connection made
wss.on("connection" ,(socket)=>{
  console.log("Server Connected ")
  socket.on("message" , (e)=>{
    if(e.toString()=="ping"){
        socket.send("pong");
    }
  })
})