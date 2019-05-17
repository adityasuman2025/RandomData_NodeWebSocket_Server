const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3030 });

wss.on('connection', function connection(ws) 
{
  ws.on('message', function incoming(message) 
  {
    console.log('received: %s', message);
  });

  var sendRandomNumbers = function(ws) 
  {
    var randomNum1 = Math.floor(Math.random() * 10000);  
    var randomNum2 = Math.floor(Math.random() * 1000);  
    var randomNum3 = Math.floor(Math.random() * 100);  
    var randomNum4 = Math.floor(Math.random() * 11);  
    var randomNum5 = Math.floor(Math.random() * 10);  
    var randomNum6 = Math.floor(Math.random() * 5);  

    var jdata = {"EQUIP_STATUS": randomNum1, "LOCATION_ALERT": randomNum2, "MEORx": randomNum3, "POWER_SUPPLY": randomNum4,"UP_DOWN_CON": randomNum5, "timestamp": randomNum6};
    ws.send(JSON.stringify(jdata));    
  }

  var clientRandomNumberUpdater = setInterval(function(){
    sendRandomNumbers(ws);
  }, 1000);  
});