# Socket presses Keys #

a little javascript for the streamlabs api. this script triggers a keypress on e.g an followevent.

i wrote this script for my wifes stream on twitch > www.twitch.tv/nviolentofficial
she got some light effects in the background. we want to trigger a scene for the lights if a event is happening. we use dmx controlled lights with an sushids dmx usb dongle. software to program scenes to the lights is daslight4

demo: https://www.twitch.tv/videos/412779407

please note:
make sure, the script and the program where to trigger hotkeys is running on a dedicated
pc, which is not in use while streaming, because of the mouse movement/clicking

install:

```
clone the repo
cd to repo dir
npm install
edit settings_blank.js, fill in your credentials and rename it to settings.js
node app
trigger an alert with streamlabs.com
whatch the magic happens ;)
```
tip:
use a second pc/phone/tablet to trigger events or commands

dependencies
```
node-key-sender
robotjs
streamlabs-socket-client
```

basics:

```
socket.on('follow', (data) => {
```
will listen to the follow event on the socket connection

```
var x = 850
var y = 950
robot.moveMouse(x, y);
robot.mouseClick();
```
this will move the mouse to a specific position and click. since the key isnt a global hotkey, we have to bring the window where the key is send to in the foreground.

```
ks.sendKey('f');
```
key f will be pressed

```
console.log("Follow");
console.log(data);
```
this will log some information to the prompt.

```
wait(2500);
```
the script will wait 2,5 seconds to continue. if we got 2 or more events at the same time, the script will trigger the scene in daslight on/off. the timeout is to prevent this issue.

thanks to https://github.com/tehkhop for his streamlabs-socket-client

to do´s:
add a way to send the key as a global hotkey, so we dont have to move and click the mouse
