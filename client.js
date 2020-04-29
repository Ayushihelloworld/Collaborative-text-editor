/* globals io */

/* globals text */
// with ES6 import
// import io from 'socket.io-client';
var socket = io('http://localhost:3000');
const l = console.log
function getEl(id) {
    return document.getElementById(id)
}
const editor = getEl("editor")
editor.addEventListener("keyup", (evt) => {
    const text = editor.value
    socket.send(text)
    document.getElementById("first_iframe").src = "data:text/html;charset=utf-8," + escape(text);
  //  console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHEY " + document.getElementById("first_iframe").text)
})
socket.on('message', (data) => {
    editor.value = data
})
