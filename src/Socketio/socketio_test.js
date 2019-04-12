import io from "socket.io-client";

//one socket object means one connection to the server
const socket = io("http://localhost:3001");

//listen the receriveMessage, and receive the msg from the server
socket.on('returnMsg',(data)=>{
    console.log("from the server: ", data);
})


//send msg to the server
socket.emit("sendMsg",{name:'Hui',date:Date.now()});
console.log("to the server: ",{name:"Hui", date:Date.now()});