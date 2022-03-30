<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chat App</title>
  <style>
    *{
    font-family: sans-serif;
    margin: 0;
    padding:0;
}
.header-area{
    height: 6%;
    background-color: aqua;
    box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.2),0 0 1rem rgba(0, 0, 0, 0.2);
    text-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.2),0 0 1rem rgba(0, 0, 0, 0.2);;
    color:rgb(39, 38, 38);
    padding: 4px;
}
.message-area{
    height: 80%;
    padding: 3px;
    overflow: auto;
}
.typing-area{
    margin: 4px;
    padding: 4px;
    height: 8%;
}
.typing-box{
    width: 90%;
    height: 100%;
    resize: none;
    padding: 3px;
}
.send-button{
    border: 0;
    width: 9%;
    background:rgba(0 127 255);
    box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.2),0 0 1rem rgba(0, 0, 0, 0.2);
    font-size: 19px;
    position: absolute;
    margin: 8px;
}
.message-box{
    margin-top:10px;
}
.other-message-box{
}
.my-message.box{
    text-align: right;
    background-color: white;
}
.message{
    max-width: 70%;
    border-radius: 5%;
    padding: 5px;
    box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.2),0 0 1rem rgba(0, 0, 0, 0.2);
}
.my-message{
    float: right;
    background:rgba(0 127 255);
    color: white;
}
.other-message{
    float: left;
    background:white;
}
.separator{
    width:100%;
    height: 8px;
    float: left;
    
}

  </style>
</head>
<body>
<div class="header-area">
  <h1>Rigved Technology Chat App</h1>
</div>
<div class="message-area" id="message-area">

</div>
</div>
<div class="typing-area">
  <textarea class="typing-box" id="typing-box"></textarea>
  <button class="send-button" onclick="sendMessage()">send</button>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.4.1/socket.io.js" integrity="sha512-MgkNs0gNdrnOM7k+0L+wgiRc5aLgl74sJQKbIWegVIMvVGPc1+gc1L2oK9Wf/D9pq58eqIJAxOonYPVE5UwUFA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script type="text/javascript">
  var socket = io();
  window.onload = function(){
    socket = io.connect('http://localhost:3000');
    socket.on('server-message-broadcasted',function(message){
      var html = '<div class="message-box other-message-box">'+
    '<div class="message other-message">'+message+' </div>'+
    '<div class="separator"></div>'+
    '</div>';
    document.getElementById("message-area").innerHTML += html
    })
  }
  function sendMessage(){
    var message = document.getElementById("typing-box").value
    var html = '<div class="message-box my-message-box">'+
    '<div class="message my-message">'+message+' </div>'+
    '<div class="separator"></div>'+
    '</div>'
    document.getElementById("message-area").innerHTML += html;
    document.getElementById("typing-box").value = '';
    socket.emit('server-message',message);
}
</script>
</body>
</html>