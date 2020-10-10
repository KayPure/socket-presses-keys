const settings = require('./settings.js')
const StreamlabsSocketClient = require('streamlabs-socket-client');
const socket = new StreamlabsSocketClient({
  token: settings.token,
  emitTests: true
  // true if you want alerts triggered by the test buttons on the streamlabs dashboard
});

// timeout
function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

// var
var ks = require('node-key-sender');
var robot = require("robotjs");

// Code
socket.on('follow', (data) => {
    // move mouse to position and click
    var x = 850
    var y = 950
	  robot.moveMouse(x, y);
    robot.mouseClick();
      // press key
      ks.sendKey('f');
      // log event
      console.log("Follow");
      console.log(data);
      // wait
      wait(2500);
});

socket.on('subscription', (data) => {
    // move mouse to position and click
    var x = 850
    var y = 950
	  robot.moveMouse(x, y);
    robot.mouseClick();
      // press key
      ks.sendKey('s');
      // log event
      console.log("Sub");
      console.log(data);
      // wait
      wait(2500);
});

socket.on('resubscription', (data) => {
    // move mouse to position and click
    var x = 850
    var y = 950
	  robot.moveMouse(x, y);
    robot.mouseClick();
      // press key
      ks.sendKey('s');
      // log event
      console.log("Re-Sub");
      console.log(data);
      // wait
      wait(2500);
});

socket.on('donation', (data) => {
    // move mouse to position and click
    var x = 850
    var y = 950
	  robot.moveMouse(x, y);
    robot.mouseClick();
      // press key
      ks.sendKey('d');
      // log event
      console.log("Donation");
      console.log(data);
      // wait
      wait(2500);
});

socket.on('bits', (data) => {
    // move mouse to position and click
    var x = 850
    var y = 950
	  robot.moveMouse(x, y);
    robot.mouseClick();
      // press key
      ks.sendKey('b');
      // log event
      console.log("Bits");
      console.log(data);
      // wait
      wait(2500);
});

socket.on('host', (data) => {
    // move mouse to position and click
    var x = 850
    var y = 950
	  robot.moveMouse(x, y);
    robot.mouseClick();
      // press key
      ks.sendKey('h');
      // log event
      console.log("Host");
      console.log(data);
      // wait
      wait(2500);
});

socket.on('raid', (data) => {
    // move mouse to position and click
    var x = 850
    var y = 950
	  robot.moveMouse(x, y);
    robot.mouseClick();
      // press key
      ks.sendKey('r');
      // log event
      console.log("Raid");
      console.log(data);
      // wait
      wait(2500);
});

socket.connect();
  console.log("Socket connected to Streamlabs!");
