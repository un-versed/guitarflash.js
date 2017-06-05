const robot = require('robotjs');
const config = require('../config');
const argv = require('minimist')(process.argv.slice(2));



setInterval(function() {
    var mouse = robot.getMousePos();
    console.log({ x: mouse.x, y: mouse.y });
    console.log({ color: robot.getPixelColor(mouse.x, mouse.y) });
}, 1000)